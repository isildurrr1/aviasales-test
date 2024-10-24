import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { SortCriteria, SortType } from '../types/type'

const initialState: SortType = {
  ticketSortingMethod: 'cheap',
}

const sortSlice = createSlice({
  name: 'sortCriteria',
  initialState,
  reducers: {
    setSortCriteria(state, action: PayloadAction<SortCriteria>) {
      state.ticketSortingMethod = action.payload
    },
  },
})

export const { setSortCriteria } = sortSlice.actions

export default sortSlice.reducer
