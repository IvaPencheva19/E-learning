import * as request from "./utils/requester";

const baseUrl = "http://localhost:3000/course";

export const addCourse = (courseData) =>
  request.post(`${baseUrl}/`, courseData);

export const getCourses = (id, role) =>
  request.post(`${baseUrl}/getAll`, { id: id, role: role });

export const getCourse = (id) =>
  request.post(`${baseUrl}/getCourse`, { id: id });
