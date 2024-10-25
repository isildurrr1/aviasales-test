import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { SeacrhIdResponseType, TicketsType } from '../types/type'

export const fetchSearchId = createAsyncThunk<SeacrhIdResponseType>('tickets/fetchSearchId', async () => {
  const response = await fetch('https://aviasales-test-api.kata.academy/search')
  const searchId = await response.json()
  return searchId
})

const initialState: TicketsType = {
  searchId: undefined,
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
  },
})

// export const { priceSort } = ticketsSlice.actions

export default ticketsSlice.reducer
