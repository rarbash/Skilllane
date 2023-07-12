import { LoginI } from "../state/types";
import instance from ".";

export const signIn = async (data: LoginI) => {
  try {
    return await instance.post("/users/login", {
      username: data.username,
      password: data.password,
    });
  } catch (error) {
    throw error;
  }
};

export const getOneUser = async () => {
  try {
    return await instance.get("/users/my-profile/");
  } catch (error) {
    throw error;
  }
};
