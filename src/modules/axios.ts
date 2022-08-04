import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export interface HttpResponse<T = unknown> {
  data: T;
  code: string;
  status: string;
  message?: string;
}

const TIMEOUT = 30000;

const api: AxiosInstance = Axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  timeout: TIMEOUT,
});

api.interceptors.response.use(
  (res: AxiosResponse<HttpResponse>) => {
    if (res.data) {
      return res;
    }
    errorStatus(res);
    return Promise.reject(res);
  },
  async (error) => {
    const response = error.response;
    errorStatus(response);
    return Promise.reject(response);
  }
);
api.interceptors.request.use((req: AxiosRequestConfig) => {
  req.headers = authHeader(req);
  return req;
});
const authHeader = (req: AxiosRequestConfig) => {
  const token = null;
  if (token) {
    req.headers!.Authorization = token;
  }
  return req.headers;
};
const errorStatus = (response: AxiosResponse) => {
  switch (response?.status) {
    case 400:
      break;
    case 401:
      break;
    case 403:
      break;
    case 404:
      break;
    case 405:
      break;
    case 406:
      break;
    case 408:
      break;
    case 409:
      break;
    case 500:
      break;
    case 501:
      break;
    case 502:
      break;
    case 504:
      break;
    default: {
    }
  }
};

export default api;
