import { createSlice } from '@reduxjs/toolkit'

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    value: [],
  },
  reducers: {
    add: (state,action) => {
      state.value.push(action.payload)
    },
    clear: (state) => {
      state.value.length = 0
    }
  },
})

// Action creators are generated for each case reducer function
export const { add, clear } = chatSlice.actions

export default chatSlice.reducer