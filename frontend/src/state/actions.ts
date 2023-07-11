import axios from "axios";
import { Dispatch } from "redux";
import { LoginI, LoginActionType, CourseActionType, CourseI, searchCourseI, userInfoI } from "./types";
import { signIn } from "../api/user";
import { createCourse, getCourse } from "../api/course";
import { updateProfile } from "../api/profile";

export const Login = async (data: LoginI, dispatch: Dispatch) =>  {
  const response = await signIn(data);
  localStorage.setItem("token", response.data.userToken)
  dispatch({
    type: LoginActionType.LOGIN_ACTION,
    payload: response.data
    })
}

export const checkAuth = () => {
  const token = localStorage.getItem("token")
  if(token){
    return({
        type: LoginActionType.CHECK_AUTH,
        payload: {isAuth:  true, token: token}
    })
  }else {
    return({
      type: LoginActionType.CHECK_AUTH,
      payload: {isAuth:  false, token: token}
    })
  }
}

export const GetCourse = async (dispatch: Dispatch, payload?: searchCourseI) =>  {
  const response =  await getCourse(payload);
  dispatch({
    type: CourseActionType.GET_COURSE,
    payload: response.data,
  })
}

export const createCourseAtion = async (data: CourseI, dispatch: Dispatch) =>  {
  const response =  await createCourse(data);
  dispatch({
    type: CourseActionType.GET_COURSE,
    payload: response.data,
  })
}

export const updateProfileAction = async (data: userInfoI, dispatch: Dispatch) =>  {
  const response =  await updateProfile(data);
  dispatch({
    type: CourseActionType.GET_COURSE,
    payload: response.data,
  })
}