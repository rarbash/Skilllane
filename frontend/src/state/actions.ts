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
    const errorMessage: String = error.message;
    let action: ErrorrActionI = {
      type: ErrorActionType.ERROR_MES,
      payload: errorMessage,
    };
    dispatch(action);
  }
};

export const GetCourse = async (
  dispatch: Dispatch,
  payload?: searchCourseI
) => {
  try {
    const response = await getCourse(payload);
    dispatch({
      type: CourseActionType.GET_COURSE,
      payload: response.data,
    });
  } catch (error: AxiosResponse | any) {
    const errorMessage: String = error.message;
    let action: ErrorrActionI = {
      type: ErrorActionType.ERROR_MES,
      payload: errorMessage,
    };
    dispatch(action);
  }
};

export const createCourseAtion = async (data: CourseI, dispatch: Dispatch) => {
  try {
    const response = await createCourse(data);
    dispatch({
      type: CourseActionType.GET_COURSE,
      payload: response.data,
    });
  } catch (error: AxiosResponse | any) {
    const errorMessage: String = error.message;
    let action: ErrorrActionI = {
      type: ErrorActionType.ERROR_MES,
      payload: errorMessage,
    };
    dispatch(action);
  }
};

export const updateProfileAction = async (
  data: ProfileI,
  dispatch: Dispatch
) => {
  try {
    const response = await updateProfile(data);
    dispatch({
      type: UserActionType.UPDATE_PROFILE,
      payload: response.data,
    });
  } catch (error: AxiosResponse | any) {
    const errorMessage: String = error.message;
    let action: ErrorrActionI = {
      type: ErrorActionType.ERROR_MES,
      payload: errorMessage,
    };
    dispatch(action);
  }
};

export const getOneUserAction = async (dispatch: Dispatch) => {
  try {
    const response = await getOneUser();
    dispatch({
      type: UserActionType.GET_ONE_USER,
      payload: response.data.user,
    });
  } catch (error: AxiosResponse | any) {
    const errorMessage: String = error.message;
    let action: ErrorrActionI = {
      type: ErrorActionType.ERROR_MES,
      payload: errorMessage,
    };
    dispatch(action);
  }
};
