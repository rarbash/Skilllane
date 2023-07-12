import React from "react";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigateTo = useNavigate();
  const [role, setRole] = React.useState("hi");

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    const userInfo = token !== null && JSON.parse(atob(token.split(".")[1]));
    userInfo.profile && setRole(userInfo.profile.role);
  }, []);

  return (
    <div className="flex justify-between m-0 p-3 mb-10 bg-white">
      <a href="/">
        <img
          src="https://resource.skilllane.com/images/Logo/logo.png"
          alt="logo"
          className="h-10"
        />
      </a>

      <div className="flex ">
        {role === "instructor" && (
          <button
            onClick={() => navigateTo("/create-course")}
            className="bg-green-700 hover:bg-[#175635] text-white text-sm md:text-base font-bold p-1 md:p-2 rounded"
          >
            สร้างคอร์ส
          </button>
        )}
        <button
          onClick={() => navigateTo("/profile")}
          className="bg-green-700 hover:bg-[#175635] text-white text-sm md:text-base p-1 md:p-2  ml-2 rounded"
        >
          บัญชีผู้ใช้
        </button>
        <button
          onClick={() => {
            localStorage.clear();
            navigateTo("/login");
          }}
          className="bg-neutral-600 hover:bg-neutral-900 text-white text-sm md:text-base p-1 md:p-2  ml-2 rounded"
        >
          ออกจากระบบ
        </button>
      </div>
    </div>
  );
}
