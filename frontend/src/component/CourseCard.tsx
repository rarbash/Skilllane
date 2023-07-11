import React from "react";

interface courseInfo{
  name:  String,
  description: String,
  image: String,
  subject: String,
  numberStudent: String
}

export default function CourseCard(props: courseInfo) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {props.image && <img className="w-full" src={props.image.toString()} alt="Sunset in the mountains"/>}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.name}</div>
        <p className="text-gray-700 text-base">
          {props.description}
        </p>
        <p className="text-gray-700 text-base">
          รับนักเรียนจำกัด: {props.numberStudent}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{props.subject}</span>
      </div>
    </div>
  )
}