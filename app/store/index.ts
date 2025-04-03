import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from './sidebarSlice'
import donateReducer from './donateSlice'

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    donate: donateReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch