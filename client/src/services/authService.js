import * as request from "./utils/requester";

const baseUrl = 'http://localhost:3000/auth';

export const login = (loginData) => request.post(
    `${baseUrl}/login`,
    loginData
);

export const register = (regData) => request.post(
    `${baseUrl}/register`,
    regData
);