import { create } from "domain";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigateTo = useNavigate();
  const [role, setRole] = React.useState()

  React.useEffect(() =>{
    const token = localStorage.getItem("token");
    const userInfo = token !==  null && JSON.parse(atob(token.split('.')[1]))
    setRole(userInfo.profile.role)
  },[])

  return(
    <div className="flex m-0 p-3 mb-10 bg-white">
      <img className="w-25 h-10" src="https://resource.skilllane.com/images/Logo/logo.png" alt="logo" />
      {role === "instructor" && <button className="bg-[#0c895f] hover:bg-[#175635] text-white font-bold p-2 rounded" onClick={() => navigateTo("create-course")}>Create Course</button>}
      {/* <button>
        <svg width="25px" height="25px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
          <path fill="#000000" fillRule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"/>
        </svg>
      </button> */}
     <button className="bg-[#0c895f] hover:bg-[#175635] text-white font-bold p-2 rounded" onClick={() => navigateTo("profile")}>Profile</button>
    </div>
  )
}