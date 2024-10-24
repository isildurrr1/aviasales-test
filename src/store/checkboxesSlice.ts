import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TransferType } from '../types/type'

const checkboxesSlice = createSlice({
  name: 'checkboxes',
  initialState: {
    all: false, // all checked/unchecked
    transfers: {
      direct: false, // direct flight
      one: false, // one transfer
      two: false, // two transfers
      three: false, // three transfers
    },
  },
  reducers: {
    toggleAll(state, action) {
      console.log(state)
      console.log(action)
    },
    toggleTransfer(state, action: PayloadAction<{ checkInfo: boolean; transfer: TransferType }>) {
      state.transfers[action.payload.transfer] = action.payload.checkInfo
    },
  },
})

export const { toggleAll, toggleTransfer } = checkboxesSlice.actions

export default checkboxesSlice.reducer
