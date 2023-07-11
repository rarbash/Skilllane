import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkAuth, GetCourse } from "../state/actions";
import { courseReducer } from "../state/reducers";
// import { store } from "../state/store";
import { CourseI , CourseSate, CourseActionI, CourseActionType} from "../state/types";
import CourseCard from "./CourseCard";
import Nav from "./Nav";
import {RootState} from "../state/index"
import Datepicker from "react-tailwindcss-datepicker"; 

export default function Home() {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const authInfo = useSelector((state: RootState) => state.authInfo);
  const courseData: CourseI[] = useSelector((state: RootState) => state.courseList.courses);
  const [date, setDate] =  React.useState({startDate:  "", endDate: ""})
  // const [value, setValue] = React.useState({ 
  //   startDate: new Date(), 
  //   endDate: new Date().setMonth(11) 
  //   }); 

  React.useEffect(() => {
    // dispatch(checkAuth());
    if(!localStorage.getItem("token")){
      navigateTo('login');
    }
    const callCourse = async () => {
      await GetCourse(dispatch)
    }
    callCourse();
    // console.log(courseData)
    // console.log(courseData)
  }, [dispatch,navigateTo]);

  const createCourseCard = () => {
    if(courseData){
      if(courseData.length > 0){
        const card = courseData.map((item, num) => {
          return(<CourseCard
            key={num}
            name={item.name}
            description={item.description}
            image={item.image}
            subject={item.subject}
            numberStudent={item.numberStudent}
            />)
        })
        return card;
      }else {
        return(
          <div>
            ไม่พบข้อมูลที่ค้นหา
          </div>
        )
      }
    }
  }

  const handleValueChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name,value} = event.target;
    if(name === 'input'){
      await GetCourse(dispatch, {name: value, startDate: null, endDate: null});
    }else {
      setDate({...date, [name]:  value});
    }
  } 

  const handdleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await GetCourse(dispatch, {name: null, startDate: date.startDate, endDate: date.endDate});
  }

  return(
    <div className="bg-gray-50 h-screen">
      <Nav/>
      <div className="flex flex-col items-center justify-center mr-20 ml-20">
        <div className="flex items-center justify-center w-full">
          <input className="shadow appearance-none border rounded w-2/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="input" name="input" type="text" placeholder="ค้นหาคอร์ส" onChange={handleValueChange}/>
          <div>
            <form onSubmit={handdleSubmit}>
              <span>ช่วงเวลา</span> 
              <label>วันเริ่มต้น</label>
              <input type="date" id="startDate" name="startDate" required onChange={handleValueChange}/>
              <label>วันสิ้นสุด</label>
              <input type="date" id="endDate" name="endDate" required onChange={handleValueChange}/>
              <button className="bg-[#0c895f] hover:bg-[#175635] text-white font-bold mt-5 py-1 px-2 rounded" type="submit">ยืนยัน</button>
            </form>
            {/* <input className="shadow appearance-none border rounded w-2/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="input" type="text" placeholder=""/> */}
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4  mt-10">
          {createCourseCard()}
        </div>
      </div>
    </div>
  )
}
