import { configureStore } from "@reduxjs/toolkit";
import UserReducers from '../Reducers/UserReducer'

export const store = configureStore({
    reducer: {
        userReducers:UserReducers,
    },
  })