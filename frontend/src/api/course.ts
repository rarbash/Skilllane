import { CourseI, searchCourseI } from "../state/types";
import instance from ".";

export const getCourse = async (payload?: searchCourseI) => {
  try {
    let queryParam = "?";
    queryParam += payload?.name ? `name=${payload.name}` : "";
    queryParam += payload?.startDate ? `&start=${payload?.startDate}` : "";
    queryParam += payload?.endDate ? `&end=${payload?.endDate}` : "";
    return await instance.get("/course" + queryParam);
  } catch (error) {
    throw error;
  }
};

export const createCourse = async (data: CourseI) => {
  try {
    return await instance.post("/course", {
      name: data.name,
      description: data.description,
      category: data.category,
      subject: data.subject,
      numberStudent: data.numberStudent,
      image: data.image,
    });
  } catch (error) {
    throw error;
  }
};
