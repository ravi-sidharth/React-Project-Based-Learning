import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Reducers/CounterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})