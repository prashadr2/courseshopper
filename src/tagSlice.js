import { createSlice } from '@reduxjs/toolkit'

export const tagSlice = createSlice({
  name: 'tags',
  initialState: { 
    tags: [],
  },
  reducers: {
    add: (state, action) => {
        console.log(action.payload);
        const toadd = action.payload;
        const oldtags = state.tags;
        state.tags = [...oldtags, toadd];
    },
    remove: (state, action) => {
      const toremove = action.payload;
      const oldtags = state.tags;
      state.tags = oldtags.filter(c => c !== toremove);
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, remove } = tagSlice.actions

export default tagSlice.reducer