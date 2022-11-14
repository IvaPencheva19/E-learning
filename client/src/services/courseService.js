import * as request from "./utils/requester";

const baseUrl = "http://localhost:3000/course";

export const addCourse = (courseData) =>
  request.post(`${baseUrl}/`, courseData);

export const getCourses = (id, role) =>
  request.post(`${baseUrl}/getAll`, { id: id, role: role });

export const getCourse = (id) =>
  request.post(`${baseUrl}/getCourse`, { id: id });

export const getCourseMembers = (id) =>
  request.post(`${baseUrl}/getCourseMembers`, { id: id });

export const addCourseMember = (idCourse, username) =>
  request.post(`${baseUrl}/addCourseMember`, {
    idCourse: idCourse,
    username: username,
  });

export const removeCourseMember = (idCourse, username) =>
  request.post(`${baseUrl}/removeCourseMember`, {
    idCourse: idCourse,
    username: username,
  });

export const updateCourse = (idCourse, courseData) =>
  request.post(`${baseUrl}/update`, {
    idCourse: idCourse,
    courseData: courseData,
  });
