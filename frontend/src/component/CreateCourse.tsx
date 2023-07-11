import React, { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { createCourseAtion } from "../state/actions";
import { CourseI } from "../state/types";

export default function CreateCourse(){
  const [courseForm, setCourseForm] = React.useState<CourseI>({name: "", description: "", category: "",subject: "", numberStudent: "", image: ""});
  const dispatch = useDispatch();

  const handdleInputChange = (event: React.ChangeEvent<HTMLInputElement> ) => {
    const {name,  value} = event.target;
    setCourseForm({...courseForm, [name]:  value});
  }

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(courseForm)
    await createCourseAtion(courseForm, dispatch);
  }
    
  return(
    <div className="flex items-center justify-center bg-gray-50 h-screen">
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded w-1/3 px-8 pt-6 pb-8 mb-4">
      <span className="block text-[#175635]  text-center text-xl font-bold mb-5">
          Create Course Form
      </span>
      <div className="mb-4">
        <label className="block text-[#175635] text-sm font-bold mb-2">
          Name
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" name="name"  required  placeholder="Course name" onChange={handdleInputChange}/>
      </div>
      <div className="mb-4">
        <label className="block text-[#175635] text-sm font-bold mb-2">
          Description
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" name="description" placeholder="Course description" onChange={handdleInputChange}/>
      </div>
      <div className="mb-4">
        <label className="block text-[#175635] text-sm font-bold mb-2">
          Category
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="category" type="text" name="category" required placeholder="Course category" onChange={handdleInputChange}/>
      </div>
      <div className="mb-4">
        <label className="block text-[#175635] text-sm font-bold mb-2">
          Subject
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" name="subject" required placeholder="Course subject" onChange={handdleInputChange}/>
      </div>
      <div className="mb-4">
        <label className="block text-[#175635] text-sm font-bold mb-2">
          Number Student
        </label>
        <input className="shadow appearance-none border rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="numberStudent" type="number" name="numberStudent" onChange={handdleInputChange}/>
        <p className="text-gray-500 text-xs">
          Leave blank for no limit.
        </p>
      </div>
      <div className="mb-4">
        <label className="block text-[#175635] text-sm font-bold mb-2">
          Image
        </label>
        <div>
          <input type="file" name="image" onChange={handdleInputChange}/>
          {/* <div className="block text-gray-700 text-sm font-bold mb-2">{file && `${file.name} - ${file.type}`}</div> */}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-[#0c895f] hover:bg-[#175635] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Create
        </button>
      </div>
    </form>
  </div>
  )
}