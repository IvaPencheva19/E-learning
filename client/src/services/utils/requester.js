import {
  LOCAL_STORAGE_KEY,
  SERVER_AUTHORIZATION_HEADER_NAME,
} from "../../config/constants";

const request = async (method, url, data) => {
  try {
    const authData = localStorage.getItem(LOCAL_STORAGE_KEY);

    const auth = JSON.parse(authData || "{}");

    let headers = {};

    if (auth.AuthorizeToken) {
      headers[SERVER_AUTHORIZATION_HEADER_NAME] = auth.AuthorizeToken;
    }

    let buildRequest;
    console.log(auth.email);
    console.log(auth.AuthorizeToken);
    console.log(headers[SERVER_AUTHORIZATION_HEADER_NAME]);

    if (method === "GET") {
      buildRequest = fetch(url, { headers });
    } else {
      buildRequest = fetch(url, {
        method,
        headers: {
          ...headers,
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(data),
      });
    }
    const response = await buildRequest;
    const result = await response.json();

    if (response.status == 400) {
      throw new Error(result.error);
    }

    return result;
  } catch (error) {
    throw new Error(error);
  }
};

export const get = request.bind({}, "GET");
export const post = request.bind({}, "POST");
export const put = request.bind({}, "PUT");
export const patch = request.bind({}, "PATCH");
export const del = request.bind({}, "DELETE");
