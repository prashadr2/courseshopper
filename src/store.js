import { configureStore } from '@reduxjs/toolkit'
import courseReducer from './courseSlice'
import orcaReducer from './orcaSlice'
export default configureStore({
  reducer: {
    courses: courseReducer,
    allcourses: orcaReducer,
  },
}) 