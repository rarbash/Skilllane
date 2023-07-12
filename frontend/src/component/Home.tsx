import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetCourse, getOneUserAction } from "../state/actions";
import { CourseI } from "../state/types";
import CourseCard from "./CourseCard";
import Nav from "./Nav";
import { RootState } from "../state/index";
import Loading from "./Loading";

export default function Home() {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const courseData: CourseI[] = useSelector(
    (state: RootState) => state.courseList.courses
  );
  const [date, setDate] = React.useState({ startDate: "", endDate: "" });

  React.useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigateTo("login");
    }
    const callCourse = async () => {
      await GetCourse(dispatch);
    };

    const getOneUser = async () => {
      await getOneUserAction(dispatch);
    };
    getOneUser();
    callCourse();
  }, [dispatch, navigateTo]);

  const createCourseCard = () => {
    if (courseData) {
      if (courseData.length > 0) {
        const card = courseData.map((item, num) => {
          return (
            <CourseCard
              key={num}
              name={item.name}
              description={item.description}
              image={item.image?.toString()}
              category={item.category}
              subject={item.subject}
              numberStudent={item.numberStudent}
              createdAt={item.createdAt}
            />
          );
        });
        return card;
      } else {
        return <div>ไม่พบข้อมูลที่ค้นหา</div>;
      }
    }
  };

  const handleValueChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    if (name === "input") {
      await GetCourse(dispatch, {
        name: value,
        startDate: null,
        endDate: null,
      });
    } else {
      setDate({ ...date, [name]: value });
    }
  };

  const handdleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await GetCourse(dispatch, {
      name: null,
      startDate: date.startDate,
      endDate: date.endDate,
    });
  };

  return courseData ? (
    <div className="bg-gray-50 min-h-screen h-auto pb-5">
      <Nav />
      <div className="flex flex-col items-center justify-center mr-10 ml-10 sm:mr-14 sm:ml-14 lg:mr-20 lg:ml-20">
        <div className="flex flex-col items-center justify-center w-full">
          <input
            id="input"
            name="input"
            type="text"
            placeholder="ค้นหาชื่อคอร์ส"
            onChange={handleValueChange}
            className="shadow appearance-none border rounded w-full sm:w-2/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
          />
          <div className="shadow appearance-none border rounded w-full sm:w-2/4 py-2 px-3 text-gray-700 leading-tight bg-white focus:outline-none focus:shadow-outline">
            <form
              onSubmit={handdleSubmit}
              className="flex flex-col justify-center"
            >
              <span>ค้นหาช่วงเวลาคอร์ส</span>
              <div className="flex items-center justify-center mt-3">
                <label>วันเริ่มต้น: </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  required
                  onChange={handleValueChange}
                  className="ml-2 mr-3 border rounded p-1"
                />
                <label>วันสิ้นสุด: </label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  required
                  onChange={handleValueChange}
                  className="ml-2 mr-3 border rounded p-1"
                />
                <button
                  className="bg-[#0c895f] hover:bg-[#175635] text-white font-bold py-1 px-2 rounded"
                  type="submit"
                >
                  ยืนยัน
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-3 md:gap-4 mt-10">
          {createCourseCard()}
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}
