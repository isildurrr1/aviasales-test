import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CheckboxesType, ToggleTransferActionType } from '../types/type'

const initialState: CheckboxesType = {
  all: false, // all checked/unchecked
  transfers: {
    direct: false, // direct flight
    one: false, // one transfer
    two: false, // two transfers
    three: false, // three transfers
  },
}

const checkboxesSlice = createSlice({
  name: 'checkboxes',
  initialState,
  reducers: {
    toggleAll(state, action: PayloadAction<boolean>) {
      state.all = action.payload
      if (action.payload) {
        Object.keys(state.transfers).forEach((key) => {
          state.transfers[key as keyof typeof state.transfers] = true
        })
      } else {
        state.transfers = initialState.transfers
      }
    },
    toggleTransfer(state, action: PayloadAction<ToggleTransferActionType>) {
      state.transfers[action.payload.transfer] = action.payload.checkState
      if (!Object.values(state.transfers).includes(false)) {
        state.all = true
      } else {
        state.all = false
      }
    },
  },
})

export const { toggleAll, toggleTransfer } = checkboxesSlice.actions

export default checkboxesSlice.reducer
