import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CheckboxesType, ToggleTransferActionType } from '../types/type'

const initialState: CheckboxesType = {
  all: true, // all checked/unchecked
  transfers: {
    direct: true, // direct flight
    one: true, // one transfer
    two: true, // two transfers
    three: true, // three transfers
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
        Object.keys(state.transfers).forEach((key) => {
          state.transfers[key as keyof typeof state.transfers] = false
        })
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
