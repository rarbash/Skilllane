import React from "react";
import { userInfoI } from "../state/types";

export default function Profile() {
  const [userProfile, setUserProfile] = React.useState<userInfoI>()

  const handdleInputChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
    const {name,  value} = event.target;
    // setCourseForm({...courseForm, [name]:  value});
  }

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(courseForm)
    // await createCourseAtion(courseForm, dispatch);
  }

  React.useEffect(() =>  {
    const token = localStorage.getItem("token");
    const userInfo = token !==  null && JSON.parse(atob(token.split('.')[1]))
    setUserProfile(userInfo.profile)
    console.log(userProfile)
  }, [])

  return(
    <div className="flex items-center justify-center bg-gray-50 h-screen">
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded w-1/3 px-8 pt-6 pb-8 mb-4">
      <span className="block text-[#175635]  text-center text-xl font-bold mb-5">
          User Profile
      </span>
      <div className="mb-4">
        <label className="block text-[#175635] text-sm font-bold mb-2">
          First Name
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" name="name" value={userProfile?.firstName.toString()} onChange={handdleInputChange}/>
      </div>
      <div className="mb-4">
        <label className="block text-[#175635] text-sm font-bold mb-2">
          Last Name
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" name="description" value={userProfile?.lastName.toString()} onChange={handdleInputChange}/>
      </div>
      <div className="mb-4">
        <label className="block text-[#175635] text-sm font-bold mb-2">
          Nickname
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="category" type="text" name="category" required value={userProfile?.nickname.toString()} onChange={handdleInputChange}/>
      </div>
      <div className="mb-4">
        <label className="block text-[#175635] text-sm font-bold mb-2">
          Birth Date
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="date" name="subject" required value={userProfile?.birthday.toString()} onChange={handdleInputChange}/>
      </div>
      <div className="mb-4">
        <label className="block text-[#175635] text-sm font-bold mb-2">
          Gender
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" name="subject" required value={userProfile?.gender.toString()}  onChange={handdleInputChange}/>
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-[#0c895f] hover:bg-[#175635] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Apply
        </button>
      </div>
    </form>
  </div>
  )
}