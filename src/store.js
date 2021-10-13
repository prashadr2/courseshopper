import { configureStore } from '@reduxjs/toolkit'
import courseReducer from './courseSlice'
export default configureStore({
  reducer: {
    courses: courseReducer,
  },
}) 