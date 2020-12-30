import { appApiUrl } from "../configs/config";

export const fetchData = async (
  isTokenReq,
  path,
  method = "GET",
  data = {}
) => {
  let result = {
    state: false,
    data: null,
    error: null,
  };
  const token = localStorage.getItem("token") || "";

  const url = `${appApiUrl}/${path}`;
  let headers = {
    "Content-Type": "application/json",
  };
  if (isTokenReq) {
    headers = {
      "Content-Type": "application/json",
      token: token,
    };
  }
  let options = {};
  if (method !== "GET") {
    options = {
      method: method, // GET, POST, PUT, DELETE, etc.
      headers: headers,
      body: JSON.stringify(data),
    };
  }

  await fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      result = {
        state: true,
        data: data,
        error: null,
      };
    })
    .catch((err) => {
      result = {
        state: false,
        data: null,
        error: err,
      };
    });

  return result;
};
