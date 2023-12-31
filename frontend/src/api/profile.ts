import { ProfileI } from "../state/types";
import instance from ".";

export const updateProfile = async (data: ProfileI) => {
  try {
    return await instance.post("/profile/update", {
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      nickname: data.nickname,
      birthday: data.birthday,
      gender: data.gender,
    });
  } catch (error) {
    throw error;
  }
};
