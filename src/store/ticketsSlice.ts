import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

import { fetchTicketsType, RootState, SeacrhIdResponseType, SortCriteria, TicketsType } from '../types/type'
import { sortTickets } from '../utils/func'

export const fetchSearchId = createAsyncThunk<SeacrhIdResponseType>('tickets/fetchSearchId', async () => {
  const response = await fetch('https://aviasales-test-api.kata.academy/search')
  const searchId = await response.json()
  return searchId
})

export const fetchTickets = createAsyncThunk<fetchTicketsType | null, void, { state: RootState }>(
  'tickets/fetchTickets',
  // async (_, { dispatch, getState }) => {
  async (_, { getState }) => {
    const state = getState()
    try {
      const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${state.tickets.searchId}`)
      const tickets = await response.json()
      if (!tickets.stop) {
        // dispatch(fetchTickets())
        return {
          tickets: tickets.tickets,
          stop: tickets.stop,
          ticketSortingMethod: state.sortCriteria.ticketSortingMethod,
          checkboxes: state.checkboxes,
        }
      }
      return {
        tickets: tickets.tickets,
        stop: tickets.stop,
        ticketSortingMethod: state.sortCriteria.ticketSortingMethod,
        checkboxes: state.checkboxes,
      }
    } catch (error) {
      console.error('Ошибка при загрузке билетов, продолжаем:', error)
      // dispatch(fetchTickets())
      return null
    }
  }
)

const initialState: TicketsType = {
  searchId: null,
  list: [],
  loading: false,
  error: null,
}

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    sortList(state, action: PayloadAction<SortCriteria>) {
      state.list = sortTickets(state.list, action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchId.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchSearchId.fulfilled, (state, action) => {
        state.searchId = action.payload.searchId
        state.loading = true
      })
      .addCase(fetchTickets.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.loading = true
        state.error = null
        if (action.payload && action.payload.tickets) {
          const newTickets = state.list.concat(action.payload.tickets)
          state.list = sortTickets(newTickets, action.payload.ticketSortingMethod)
          if (action.payload.stop === true) {
            state.loading = false
          }
        }
      })
  },
})

export const { sortList } = ticketsSlice.actions

export default ticketsSlice.reducer
