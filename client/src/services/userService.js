import * as request from "./utils/requester";

const baseUrl = "http://localhost:3000/profile";

export const updateProfile = (profileData) => request.patch(`${baseUrl}`, { profileData });