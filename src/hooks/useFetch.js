import { useEffect, useRef, useState } from "react";
import { appApiUrl } from "../configs/config";

export const useFetch = (isTokenReq, path, method = "GET", data = {}) => {
  const isMounted = useRef(true);

  const initState = {
    data: null,
    loading: true,
    error: null,
  };

  const [state, setState] = useState(initState);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState(initState);

    const token = localStorage.getItem("token") || "";

    const url = `${appApiUrl}/${path}`;
    const headers = {
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

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted.current) {
          setState({
            data,
            loading: false,
            error: null,
          });
        }
      })
      .catch((error) => {
        if (isMounted.current) {
          setState({
            data: null,
            loading: false,
            error,
          });
        }
      });
  }, [isTokenReq, path, method, data]);

  return state;
};
