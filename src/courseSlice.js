import { createSlice } from '@reduxjs/toolkit'
import { PassThrough } from 'stream';

export const courseSlice = createSlice({
  name: 'courses',
  initialState: { 
    courses: [], //list of codes in the database, like ECON-1200 or CSCI-4050 or BIOL-2560
  },
  reducers: {
    add: (state, action) => {
        console.log(action.payload);
        const toadd = action.payload;
        const oldcourses = state.courses;
        if(oldcourses.includes(toadd) === false){
          state.courses = [...oldcourses, toadd];
        }
    },
    remove: (state, action) => {
      const toremove = action.payload;
      const oldcourses = state.courses;
      state.courses = oldcourses.filter(c => c !== toremove);
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, remove } = courseSlice.actions

export default courseSlice.reducer