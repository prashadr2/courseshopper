import { configureStore } from '@reduxjs/toolkit'
import courseReducer from './courseSlice'
import tagReducer from './tagSlice'
export default configureStore({
  reducer: {
    courses: courseReducer,
    tags: tagReducer,
  },
}) 