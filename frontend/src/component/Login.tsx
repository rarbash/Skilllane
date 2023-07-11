import React from "react";
import { useDispatch } from "react-redux";
import { checkAuth, Login } from "../state/actions";
import { LoginI } from "../state/types";
// import { store } from "../state/store";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../state";

export default function LoginCard() {
  const [loginForm, setLoginForm] = React.useState<LoginI>({username: "", password: ""});
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const authInfo = useSelector((state: RootState) => state.authInfo)

  const handdleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name,  value} = event.target;
    setLoginForm({...loginForm, [name]:  value});
  }

  const handdleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // await Login({username: "", password: ""}, dispatch);
    event.preventDefault();
    await Login(loginForm, dispatch);
    ////fix these later
    // await dispatch(checkAuth());
    if(localStorage.getItem("token")){
      navigateTo('/');
    }
  }

  // React.useEffect(() => {
  //   dispatch(checkAuth());
  //   console.log(authInfo)
  //   if(authInfo.isAuth === true){
  //     navigateTo('/');
  //   }
  // }, [authInfo.isAuth]);

  return(
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center h-screen">
        <img src="https://resource.skilllane.com/images/Logo/logo.png" alt="logo" />
          <form onSubmit={handdleSubmit} className="flex flex-col bg-white shadow-md rounded w-1/3 px-8 pt-6 pb-8 mb-4 mt-10">
            <h1 className="text-center text-xl text-[#175635] mb-5 ">เข้าสู่ระบบ</h1>
            <label className="block text-[#175635] text-sm font-bold mb-2">
              Username:
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="username" name="username"  required placeholder="Username" onChange={handdleInputChange}/>
            <label  className="block text-[#175635] text-sm font-bold mb-2">
              Password:
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" id="password" name="password" required placeholder="Password" onChange={handdleInputChange}/>
            <button className="bg-[#0c895f] hover:bg-[#175635] text-white font-bold mt-5 py-2 px-4 rounded" type="submit">Login</button>
          </form>
        </div>
    </section>
  )
}