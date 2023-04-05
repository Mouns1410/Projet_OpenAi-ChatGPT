import { createSlice } from '@reduxjs/toolkit'

export const currentMsgSlice = createSlice({
  name: 'indexMsg',
  initialState: {
    value: 0,
  },
  reducers: {
    get: (state,action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { get } = currentMsgSlice.actions

export default currentMsgSlice.reducer