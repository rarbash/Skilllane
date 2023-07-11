import { LoginState, LoginActionType, LoginActionI, AuthSate, CourseSate, CourseActionI, CourseActionType } from "./types";

const initialState: LoginState = {
	loginInfo: [],
};

const initialAuthState: AuthSate = {
  authInfo: []
}

const initialCourseState: CourseSate = {
  courseList: []
}

export const loginReducer = (state = initialState, action: LoginActionI) => {
  switch (action.type){
    case LoginActionType.LOGIN_ACTION:
      // console.log("hiiii")
      return action.payload
    default:
      return state;
  }
}

export const authReducer = (state = initialAuthState, action: LoginActionI) => {
  switch (action.type){
    case LoginActionType.CHECK_AUTH:
      return action.payload
    default:
      return state;
  }
}

export const courseReducer = (state = initialCourseState, action: CourseActionI) => {
  switch (action.type){
    case CourseActionType.GET_COURSE:
      return action.payload
      case CourseActionType.CREATE_COURSE:
        return action.payload
    default:
      return state;
  }
}