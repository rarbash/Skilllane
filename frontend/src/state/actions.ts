import axios, { AxiosError } from "axios";
import { Dispatch } from "redux";
import {
  LoginI,
  LoginActionType,
  CourseActionType,
  CourseI,
  searchCourseI,
  ProfileI,
  UserActionType,
  ErrorActionType,
  ErrorrActionI,
} from "./types";
import { getOneUser, signIn } from "../api/user";
import { createCourse, getCourse } from "../api/course";
import { updateProfile } from "../api/profile";
import { errorReducer } from "./reducers";
import { AxiosResponse } from "axios";

export const Login = async (data: LoginI, dispatch: Dispatch) => {
  try {
    const response = await signIn(data);
    localStorage.setItem("token", response.data.userToken);
    dispatch({
      type: LoginActionType.LOGIN_ACTION,
      payload: response.data,
    });
  } catch (error: AxiosResponse | any) {
    const statusCode = error.response.status;
    const errorMessage: String = error.message;

    let action: ErrorrActionI = {
      type: ErrorActionType.ERROR_MES,
      payload: errorMessage,
    };

    dispatch(action);
  }
};

export const checkAuth = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return {
      type: LoginActionType.CHECK_AUTH,
      payload: { isAuth: true, token: token },
    };
  } else {
    return {
      type: LoginActionType.CHECK_AUTH,
      payload: { isAuth: false, token: token },
    };
  }
};

export const GetCourse = async (
  dispatch: Dispatch,
  payload?: searchCourseI
) => {
  const response = await getCourse(payload);
  dispatch({
    type: CourseActionType.GET_COURSE,
    payload: response.data,
  });
};

export const createCourseAtion = async (data: CourseI, dispatch: Dispatch) => {
  const response = await createCourse(data);
  dispatch({
    type: CourseActionType.GET_COURSE,
    payload: response.data,
  });
};

export const updateProfileAction = async (
  data: ProfileI,
  dispatch: Dispatch
) => {
  const response = await updateProfile(data);
  dispatch({
    type: UserActionType.UPDATE_PROFILE,
    payload: response.data,
  });
};

export const getOneUserAction = async (dispatch: Dispatch) => {
  const response = await getOneUser();
  dispatch({
    type: UserActionType.GET_ONE_USER,
    payload: response.data.user,
  });
};

// export const errorAtion = async (message: String,action: ErrorActionType, dispatch: Dispatch) =>  {
//   dispatch({
//     type: action,
//     payload: message,
//   })
// }
