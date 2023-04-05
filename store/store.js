import { configureStore } from '@reduxjs/toolkit'
import boxSlice from './features/boxSlice'
import currentMsgSlice from './features/currentMsgSlice'

export const store = configureStore({
  reducer: {
    box : boxSlice,
    currentMsg : currentMsgSlice
  },
})
