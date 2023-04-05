import { createSlice } from '@reduxjs/toolkit'

export const boxSlice = createSlice({
  name: 'box',
  initialState: {
    value: [],
  },
  reducers: {
    addBox: (state,action) => {
      state.value.push({
        messages : [action.payload]
      })
    },
    clear: (state) => {
      state.value.length = 0
    },
    addMsg: (state,action) => {
      state.value[action.payload.index].messages.push(
        action.payload.message
      )
    },
  },
})

// Action creators are generated for each case reducer function
export const { addBox, clear, addMsg } = boxSlice.actions

export default boxSlice.reducer