import React from "react";
import { useDispatch } from "react-redux";
import { Login } from "../state/actions";
import { LoginI } from "../state/types";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../state";

export default function LoginCard() {
  const [loginForm, setLoginForm] = React.useState<LoginI>({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const errorMes = useSelector((state: RootState) => state.errorMessage);

  const handdleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handdleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await Login(loginForm, dispatch);

    if (localStorage.getItem("token")) {
      navigateTo("/");
    }
  };

  return (
    <section className="bg-gray-50 ">
      <div className="flex flex-col items-center justify-center min-h-screen h-auto">
        <img
          src="https://resource.skilllane.com/images/Logo/logo.png"
          alt="logo"
          className="h-14 sm:h-20 "
        />
        <form
          onSubmit={handdleSubmit}
          className="flex flex-col bg-white shadow-md rounded w-full sm:w-1/2 md:w-1/3 px-8 pt-6 pb-8 mb-4 mt-10"
        >
          <h1 className="text-center text-xl text-[#175635] mb-5 ">
            เข้าสู่ระบบ
          </h1>
          <label className="block text-[#175635] text-sm font-bold mb-2">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            required
            placeholder="Username"
            onChange={handdleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <label className="block text-[#175635] text-sm font-bold mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="Password"
            onChange={handdleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {typeof errorMes === "string" && (
            <div className="text-red-500">Invaild username or password</div>
          )}
          <button
            type="submit"
            className="bg-[#0c895f] hover:bg-[#175635] text-white font-bold mt-5 py-2 px-4 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}
