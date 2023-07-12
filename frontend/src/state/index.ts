import { combineReducers } from 'redux'
import {loginReducer, courseReducer, userReducer, errorReducer} from './reducers'

const rootReducer =  combineReducers({
  loginInfo: loginReducer,
  courseList: courseReducer,
  userInfo: userReducer,
  errorMessage: errorReducer
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;