export interface LoginI{
  username: String,
  password: String
}

export interface LoginState{
  loginInfo: LoginI[]
}

export enum  LoginActionType {
  LOGIN_ACTION = "LOGIN_ACTION",
  LOGOUT_ACTION = "LOGOUT_ACTION",
  CHECK_AUTH = "CHECK_AUTH"
}

export type LoginAction = LoginActionType;

export interface LoginActionI {
  type: LoginAction,
  payload: any
}

export interface LoginInfo {
  userToken: String,
  username: String
}

export interface AuthI {
  isAuth: Boolean,
  token: String
}

export interface AuthSate {
  authInfo: AuthI[]
}

export interface AuthActionI {
  type: LoginAction,
  payload: any
}

export enum  CourseActionType {
  GET_COURSE = "GET_COURSE",
  CREATE_COURSE = "CREATE_COURSE",
  SEARCH_COURSE = "SEARCH_COURSE"
}

export type CourseAction = CourseActionType;

export interface CourseActionI {
  type: CourseAction,
  payload: any
}

export interface CourseI{
  name:  String,
  description: String,
  category: String,
  subject: String,
  numberStudent: String,
  image: String
}

export interface CourseSate {
  courseList: CourseI[]
}

export interface searchCourseI {
  name: String| null,
  startDate: String | null,
  endDate: String| null
}

export interface userInfoI {
  UserId: String,
  birthday: String,
  createdAt: String,
  firstName: String,
  gender: String,
  id: String,
  lastName: String,
  nickname: String,
  role: String,
  updatedAt: String,
}