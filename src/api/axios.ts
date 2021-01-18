import axios, { AxiosInstance, AxiosResponse } from "axios";

export const getAxios = (): AxiosInstance => {
  const instance = axios.create();
  instance.interceptors.response.use(responseInterceptor);

  return instance;
};

const responseInterceptor = (response: AxiosResponse) => {
  if (response.data.status === 200) {
    return Promise.reject(response.data);
  }
  return response.data;
};
