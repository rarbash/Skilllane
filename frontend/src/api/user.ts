import { ErrorActionType, ErrorrActionI, LoginI } from "../state/types";
import instance from ".";
import { useDispatch } from "react-redux";
import { errorReducer } from "../state/reducers";
import { AxiosResponse } from "axios";

// const dispatch = useDispatch();


export const signIn = async(data: LoginI) => {
  try {
    return await instance.post("/users/login",{
      username: data.username,
      password: data.password
    })
  } catch (error) {
    throw error;
  }
}

export const getOneUser = async() => {
  return await instance.get("/users/my-profile/");
}