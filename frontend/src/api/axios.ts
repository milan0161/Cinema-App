import axios, {
  Axios,
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { getAToken } from '../app/utils/saveToken';
import { BaseQueryFn } from '@reduxjs/toolkit/dist/query';

export const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
export const publicUrl = import.meta.env.VITE_REACT_APP_BASE_PUBLIC_URL;

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig<any> => {
    if (config.headers.Authorization !== false) {
      const aToken = getAToken();
      if (aToken) {
        config.headers.Authorization = `Bearer ${aToken}`;
      }
      return config;
    }
    return config;
  },
  (error: Axios): Promise<AxiosError> => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (config: AxiosResponse): AxiosResponse<any> => {
    if (config.status === 200) {
      return config;
    }
    return config;
  },
  async (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error.response?.data);
  },
);

export const axiosBaseQuery =
  (): BaseQueryFn<AxiosRequestConfig<any>, unknown, AxiosError> =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axiosInstance({
        url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const error = axiosError as AxiosError;
      return {
        error,
      };
    }
  };
