import { userInfo } from "os";
import {
  LoginState,
  LoginActionType,
  LoginActionI,
  CourseSate,
  CourseActionI,
  CourseActionType,
  UserActionI,
  UserActionType,
  UserSate,
  ErrorrActionI,
  ErrorActionType,
} from "./types";

const initialState: LoginState = {
  loginInfo: [],
};

const initialCourseState: CourseSate = {
  courseList: [],
};

const initialUserState: UserSate = {
  user: [],
};

export const loginReducer = (state = initialState, action: LoginActionI) => {
  switch (action.type) {
    case LoginActionType.LOGIN_ACTION:
      return action.payload;
    default:
      return state;
  }
};

export const courseReducer = (
  state = initialCourseState,
  action: CourseActionI
) => {
  switch (action.type) {
    case CourseActionType.GET_COURSE:
      return action.payload;
    case CourseActionType.CREATE_COURSE:
      return action.payload;
    default:
      return state;
  }
};

export const userReducer = (state = initialUserState, action: UserActionI) => {
  switch (action.type) {
    case UserActionType.GET_ONE_USER:
      // console.log(action.payload);
      return action.payload;
    case UserActionType.UPDATE_PROFILE:
      return action.payload;
    default:
      return state;
  }
};

export const errorReducer = (state = {}, action: ErrorrActionI) => {
  switch (action.type) {
    case ErrorActionType.ERROR_MES:
      return action.payload;
    case ErrorActionType.NOT_AUTH:
      return action.payload;
    case ErrorActionType.BAD_REQ:
      return action.payload;
    case ErrorActionType.FORBIDDEN:
      return action.payload;
    case ErrorActionType.NOT_FOUND:
      return action.payload;
    case ErrorActionType.OTHER:
      return action.payload;
    default:
      return state;
  }
};
