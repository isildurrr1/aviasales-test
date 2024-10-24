import { configureStore } from '@reduxjs/toolkit'

import checkboxesReducer from './checkboxesSlice'

const store = configureStore({
  reducer: {
    checkboxes: checkboxesReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
