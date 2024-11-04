import { objectToQueryString } from "../utils/helper";

const base_URL = import.meta.env.VITE_NEWSAPI_URL;

const fetchRequest = async (base_URL, url, method, params = false) => {
  let token = "";
  let headers = {
    Accept: "application/json",
  };

  let options = {
    method,
    headers,
  };

  if (params) {
    options.body = JSON.stringify(params);
    headers["Content-Type"] = "application/json";

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
  }

  const response = await fetch(base_URL + url, options);

  if (response.ok) {
    return await response.json();
  } else if (response.status === 404) {
    return { status: 404 };
  } else if (response.status === 401) {
    token = "";
    location.reload();
    return false;
  } else if (response.status === 422) {
    const errorMsg = await response.json();
    return { status: 422, msg: errorMsg };
  } else {
    return { status: 500 };
  }
};

export const get = (url, params = false) =>
  fetchRequest(
    base_URL,
    url + (params ? "?" + objectToQueryString(params) : ""),
    "GET"
  );
