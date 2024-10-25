import { configureStore } from '@reduxjs/toolkit'

import checkboxesReducer from './checkboxesSlice'
import sortReducer from './sortSlice'
import ticketsReducer from './ticketsSlice'

const store = configureStore({
  reducer: {
    checkboxes: checkboxesReducer,
    sortCriteria: sortReducer,
    tickets: ticketsReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch