import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { createCourseAtion } from "../state/actions";
import { CourseI } from "../state/types";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";

export default function CreateCourse() {
  const [courseForm, setCourseForm] = React.useState<CourseI>({
    name: "",
    description: "",
    category: "",
    subject: "",
    numberStudent: "",
    image: "",
    createdAt: "",
  });
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const imageUploaded = (file: File, callback: any) => {
    let reader = new FileReader();
    let base64 = "";
    reader.onload = () => {
      // .replace("data:", "").replace(/^.+,/, "")
      const base64String = reader.result ? reader.result.toString() : "";
      base64 = base64String;
      callback(base64);
    };
    reader.readAsDataURL(file);
  };

  const handdleInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    if (name === "image") {
      const files = (event.target as HTMLInputElement).files;
      files
        ? await imageUploaded(files[0], (data: String) => {
            console.log(data, "base64");
            setCourseForm({
              ...courseForm,
              image: data,
            });
          })
        : setCourseForm({
            ...courseForm,
            image: "",
          });
    } else {
      console.log("other change");
      setCourseForm({ ...courseForm, [name]: value });
    }
    console.log(courseForm, "courseForm");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await createCourseAtion(courseForm, dispatch);
    window.alert("สร้างคอร์สสำเร็จ กดokเพื่อไปต่อ");
    navigateTo("/");
  };

  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigateTo("login");
    }
  }, []);

  return (
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
              แบบฟอร์มคอร์ส
            </span>
          </div>
          <div className="mb-4">
            <label className="block text-[#175635] text-base font-bold mb-2">
              ชื่อคอร์ส
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              placeholder="ชื่อคอร์ส"
              onChange={handdleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#175635] text-base font-bold mb-2">
              คำบรรยาย
            </label>
            <input
              id="description"
              type="text"
              name="description"
              placeholder="คำบรรยายคอร์ส"
              onChange={handdleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#175635] text-base font-bold mb-2">
              หมวดหมู่
            </label>
            <input
              id="category"
              type="text"
              name="category"
              required
              placeholder="หมวดหมู่คอร์ส"
              onChange={handdleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#175635] text-base font-bold mb-2">
              หมวดหมู่ย่อย
            </label>
            <input
              id="subject"
              type="text"
              name="subject"
              required
              placeholder="หมวดหมู่ย่อยคอร์ส"
              onChange={handdleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-[#175635] text-base font-bold mb-2">
              จำนวนที่เปิดรับ
            </label>
            <input
              id="numberStudent"
              type="number"
              name="numberStudent"
              onChange={handdleInputChange}
              className="shadow appearance-none border rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="text-gray-500 text-xs mt-2">
              เว้นว่างไว้สำหรับไม่จำกัด
            </p>
          </div>
          <div className="mb-4">
            <label className="block text-[#175635] text-base font-bold mb-2">
              รูปภาพปก
            </label>
            <div>
              <input type="file" name="image" onChange={handdleInputChange} />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-[#0c895f] hover:bg-[#175635] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
