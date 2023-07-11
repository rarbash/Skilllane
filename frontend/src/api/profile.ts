import { userInfoI } from "../state/types";
import instance from ".";

export const updateProfile = async(data: userInfoI) => {
  return await instance.post("/profile/update",{
    firstName: data.firstName,
    lastName: data.lastName,
    nickname: data.nickname,
    birthday: data.birthday,
    gender: data.gender,
  })
}