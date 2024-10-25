import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { SeacrhIdResponseType, TicketsResponseType, TicketsType } from '../types/type'

import { RootState } from './types'

export const fetchSearchId = createAsyncThunk<SeacrhIdResponseType>('tickets/fetchSearchId', async () => {
  const response = await fetch('https://aviasales-test-api.kata.academy/search')
  const searchId = await response.json()
  return searchId
})

export const fetchTickets = createAsyncThunk<TicketsResponseType, void, { state: RootState }>(
  'tickets/fetchTickets',
  async (_, { getState }) => {
    const state = getState()
    const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${state.tickets.searchId}`)
    const tickets = await response.json()
    return tickets
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
    // priceSort(state, action) {
    //   console.log(state)
    //   console.log(action)
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchId.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchSearchId.fulfilled, (state, action) => {
        state.searchId = action.payload.searchId
        state.loading = false
      })
      .addCase(fetchTickets.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.list = action.payload.tickets
      })
  },
})

// export const { priceSort } = ticketsSlice.actions

export default ticketsSlice.reducer
