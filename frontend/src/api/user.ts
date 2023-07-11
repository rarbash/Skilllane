import { LoginI } from "../state/types";
import instance from ".";

export const signIn = async(data: LoginI) => {
  return await instance.post("/users/login",{
    username: data.username,
    password: data.password
  })
}