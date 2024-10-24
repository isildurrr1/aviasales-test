import { configureStore } from '@reduxjs/toolkit'

import checkboxesReducer from './checkboxesSlice'
import sortReducer from './sortSlice'

const store = configureStore({
  reducer: {
    checkboxes: checkboxesReducer,
    sortCriteria: sortReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
