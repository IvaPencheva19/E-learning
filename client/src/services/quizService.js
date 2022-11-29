import * as request from "./utils/requester";

const baseUrl = "http://localhost:3000/quiz";

export const addQuiz = (courseId, values, questions) =>
  request.post(`${baseUrl}/add`, { courseId, values, questions });

export const getQuizzes = (idUser) =>
  request.post(`${baseUrl}/getAll`, { idUser });

export const getQuiz = (id) => request.post(`${baseUrl}/getQuiz`, { id: id });
export const submitQuiz = (idQuiz, idUser, checkedAnswers) =>
  request.post(`${baseUrl}/submit`, {
    idQuiz: idQuiz,
    idUser: idUser,
    checkedAnswers: checkedAnswers,
  });

export const getAnswers = (idQuiz, idUser) =>
  request.post(`${baseUrl}/getAnswers`, {
    idQuiz: idQuiz,
    idUser: idUser,
  });

export const getAllResultsStudent = (idUser) =>
  request.post(`${baseUrl}/getAllResultsStudent`, {
    idUser: idUser,
  });
