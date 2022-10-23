import * as request from "./utils/requester";

const baseUrl = "http://localhost:3000/course";

export const addCourse = (courseData) =>
  request.post(`${baseUrl}/`, courseData);

export const getCourses = (courseData) =>
  request.get(`${baseUrl}/`, courseData);
