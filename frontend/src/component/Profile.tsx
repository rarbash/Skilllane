import React from "react";
import { ProfileI, UserI } from "../state/types";
import { getOneUserAction, updateProfileAction } from "../state/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../state";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import Nav from "./Nav";

export default function Profile() {
  const userDetail: UserI = useSelector((state: RootState) => state.userInfo);
  const [profileForm, setProfileForm] = React.useState<ProfileI>({
    id: "",
    firstName: "",
    lastName: "",
    nickname: "",
    birthday: "",
    gender: "",
  });
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handdleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProfileForm({ ...profileForm, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await updateProfileAction(profileForm, dispatch);
    window.alert("แก้ไขข้อมูลบัญชีสำเร็จ กดokเพื่อไปต่อ");
    navigateTo("/");
  };

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    const getOneUser = async () => {
      await getOneUserAction(dispatch);
    };
    if (!token) {
      navigateTo("login");
    }
    getOneUser();
  }, []);

  React.useEffect(() => {
    const profileDetail = userDetail.Profile;
    const currentProfile = {
      id: profileDetail ? profileDetail.id : "",
      firstName: profileDetail ? profileDetail.firstName : "",
      lastName: profileDetail ? profileDetail.lastName : "",
      nickname: profileDetail ? profileDetail.nickname : "",
      birthday: profileDetail ? profileDetail.birthday : "",
      gender: profileDetail ? profileDetail.gender : "",
    };
    setProfileForm(currentProfile);
  }, [userDetail]);

  return profileForm ? (
    <div className="bg-gray-50 min-h-screen h-auto">
      <Nav />
      <div className="flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white md:shadow-md rounded w-full md:w-1/3 px-8 pt-6 pb-8 mb-4"
        >
          <div className="flex mb-5">
            <button onClick={() => navigateTo("/")}>
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 1024 1024"
                fill="#000000"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"
                  fill=""
                />
              </svg>
            </button>
            <span className="block text-center text-[#175635] text-xl font-bold w-full">
              บัญชีผู้ใช้
            </span>
          </div>
          <div className="mb-4">
            <label className="block text-[#175635] text-base font-bold mb-2">
              ชื่อจริง
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={profileForm.firstName.toString()}
              onChange={handdleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#175635] text-base font-bold mb-2">
              นามสกุล
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={profileForm.lastName.toString()}
              onChange={handdleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#175635] text-base font-bold mb-2">
              ชื่อเล่น
            </label>
            <input
              id="nickname"
              type="text"
              name="nickname"
              required
              value={profileForm.nickname.toString()}
              onChange={handdleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#175635] text-base font-bold mb-2">
              วันเกิด
            </label>
            <input
              id="birthday"
              type="date"
              name="birthday"
              required
              value={profileForm.birthday.toString()}
              onChange={handdleInputChange}
              className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#175635] text-base font-bold mb-2">
              เพศ
            </label>
            <div className="flex">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                className="mr-1"
                checked={profileForm.gender === "male"}
                onChange={handdleInputChange}
              />
              <label htmlFor="male" className="mr-4">
                ชาย
              </label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                className="mr-1"
                checked={profileForm.gender === "female"}
                onChange={handdleInputChange}
              />
              <label htmlFor="male" className="mr-4">
                หญิง
              </label>
              <input
                type="radio"
                id="others"
                name="gender"
                value="others"
                className="mr-1"
                checked={profileForm.gender === "others"}
                onChange={handdleInputChange}
              />
              <label htmlFor="male" className="mr-4">
                อื่นๆ
              </label>
              <input
                type="radio"
                id="none"
                name="gender"
                value="none"
                className="mr-1"
                checked={profileForm.gender === "none"}
                onChange={handdleInputChange}
              />
              <label htmlFor="male" className="mr-4">
                ไม่ระบุ
              </label>
            </div>
            {/* <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" name="subject" required value={userDetail?.Profile.gender.toString()}  onChange={handdleInputChange}/> */}
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-[#0c895f] hover:bg-[#175635] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              ยืนยัน
            </button>
          </div>
        </form>
      </div>
    </div>
  ) : (
    <Loading />
  );
}
