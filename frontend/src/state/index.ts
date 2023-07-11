import { combineReducers } from 'redux'
import {loginReducer, authReducer, courseReducer} from './reducers'

const rootReducer =  combineReducers({
  loginInfo: loginReducer,
  authInfo: authReducer,
  courseList: courseReducer,
})

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;