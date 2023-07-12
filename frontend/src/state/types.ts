export interface LoginI {
  username: String;
  password: String;
}

export interface LoginState {
  loginInfo: LoginI[];
}

export enum LoginActionType {
  LOGIN_ACTION = "LOGIN_ACTION",
  LOGOUT_ACTION = "LOGOUT_ACTION",
  CHECK_AUTH = "CHECK_AUTH",
}

export type LoginAction = LoginActionType;

export interface LoginActionI {
  type: LoginAction;
  payload: any;
}

export interface LoginInfo {
  userToken: String;
  username: String;
}

export enum CourseActionType {
  GET_COURSE = "GET_COURSE",
  CREATE_COURSE = "CREATE_COURSE",
  SEARCH_COURSE = "SEARCH_COURSE",
}

export type CourseAction = CourseActionType;

export interface CourseActionI {
  type: CourseAction;
  payload: any;
}

export interface CourseI {
  name: String;
  description: String;
  category: String;
  subject: String;
  numberStudent: String;
  image: String;
  createdAt: String;
}

export interface CourseSate {
  courseList: CourseI[];
}

export interface searchCourseI {
  name: String | null;
  startDate: String | null;
  endDate: String | null;
}

export interface ProfileI {
  id: String;
  birthday: String;
  firstName: String;
  gender: String;
  lastName: String;
  nickname: String;
}

export enum UserActionType {
  GET_ONE_USER = "GET_ONE_USER",
  UPDATE_PROFILE = "UPDATE_PROFILE",
}

export type UserAction = UserActionType;

export interface UserActionI {
  type: UserAction;
  payload: any;
}

export interface UserI {
  Profile: ProfileI;
  username: String;
}

export interface UserSate {
  user: UserI[];
}

export enum ErrorActionType {
  ERROR_MES = "ERROR_MES",
  OTHER = "OTHER",
  NOT_AUTH = "NOT_AUTH",
  NOT_FOUND = "NOT_FOUND",
  BAD_REQ = "BAD_REQ",
  FORBIDDEN = "FORBIDDEN",
  SERVER_ERROR = "SERVER_ERROR",
}

export type ErrorAction = ErrorActionType;

export interface ErrorrActionI {
  type: ErrorAction;
  payload: any;
}
