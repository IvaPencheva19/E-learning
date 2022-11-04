import * as request from "./utils/requester";

const baseUrl = "http://localhost:3000/topic";
export const getTopics = (id) => request.post(`${baseUrl}/getAll`, { id: id });
export const addTopic = (courseId, name, materials) =>
  request.post(`${baseUrl}/`, { courseId, name, materials });
