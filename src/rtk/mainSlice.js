import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  displayCount: 0,
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    incrementDisplayCount: (state) => {
      state.displayCount += 5
    },
    resetDisplayCount: (state) => {
      state.displayCount = 0
    },
    setData: (state, action) => {
      state.data = action.payload
    },
  },
})

export const { incrementDisplayCount, resetDisplayCount, setData } = mainSlice.actions

export default mainSlice.reducer