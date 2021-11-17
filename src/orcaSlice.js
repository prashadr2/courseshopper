import { createSlice } from '@reduxjs/toolkit'

// Process the data obtained from the API
export const orcaSlice = createSlice({
  name: 'allcourses',
  initialState: { 
    allcourses: [],
  },
  reducers: {
    update: (state, action) => {
        state.allcourses = [...action.payload];
    },
  },
})

// Action creators are generated for each case reducer function
export const { update } = orcaSlice.actions

export default orcaSlice.reducer