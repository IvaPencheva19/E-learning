import * as request from "./utils/requester";

const baseUrl = "http://localhost:3000/quiz";

export const addQuiz = (courseId, values, questions) =>
  request.post(`${baseUrl}/add`, { courseId, values, questions });
