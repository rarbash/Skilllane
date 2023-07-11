import { CourseI, searchCourseI } from "../state/types";
import instance from ".";

export const getCourse = async(payload?: searchCourseI) => {
  let queryParam = "?"
  queryParam += payload?.name ? `name=${payload.name}` : ""
  queryParam += payload?.startDate ? `&start=${payload?.startDate}` : ""
  queryParam += payload?.endDate? `&end=${payload?.endDate}` : ""
  return await instance.get("/course"+queryParam)
}

export const createCourse = async(data: CourseI) => {
  return await instance.post("/course", {
    name:  data.name,
    description: data.description,
    category: data.category,
    subject: data.subject,
    numberStudent: data.numberStudent,
    image: data.image
  })
}