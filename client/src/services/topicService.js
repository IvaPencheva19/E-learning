import * as request from "./utils/requester";

const baseUrl = "http://localhost:3000/topic";
export const getTopics = (id) => request.post(`${baseUrl}/getAll`, { id: id });
export const addTopic = (courseId, name, materials) =>
  request.post(`${baseUrl}/`, { courseId, name, materials });
export const removeTopic = (idTopic, idCourse) =>
  request.post(`${baseUrl}/remove`, { idTopic: idTopic, idCourse: idCourse });

export const editTopic = (idTopic, newName) =>
  request.post(`${baseUrl}/edit`, { idTopic: idTopic, newName });

export const deleteMaterial = (idTopic, deleteMaterial) =>
  request.post(`${baseUrl}/deleteMaterial`, {
    idTopic: idTopic,
    deleteMaterial: deleteMaterial,
  });

export const addMaterial = (idTopic, addMaterial) =>
  request.post(`${baseUrl}/addMaterial`, {
    idTopic: idTopic,
    addMaterial: addMaterial,
  });
