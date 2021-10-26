import { createSlice } from '@reduxjs/toolkit'

export const orcaSlice = createSlice({
  name: 'allcourses',
  initialState: { 
    allcourses: [],
  },
  reducers: {
    update: (state, action) => {
        console.log("inslicer", action.payload);
        state.allcourses = [...action.payload];
    },
  },
})

// Action creators are generated for each case reducer function
export const { update } = orcaSlice.actions

export default orcaSlice.reducer