/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/ban-types */

import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios';

export class BaseApiService {
  API_HOST = process.env.REACT_APP_API_HOST;

  API_KEY = process.env.REACT_APP_API_KEY;

  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create();
    this.instance.interceptors.request.use(
      config => {
        if (!config.headers.Authorization && typeof window !== 'undefined') {
          config.headers.Authorization = `Bearer ${localStorage.getItem(
            'jwt',
          )}`;
        }

        return config;
      },
      error => {
        return Promise.reject(error);
      },
    );
  }

  protected get(url: string, data?: object): Promise<AxiosResponse> {
    return this.instance.get(url, data);
  }

  protected post(
    url: string,
    data?: object,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse> {
    return this.instance.post(url, data, config);
  }

  protected put(url: string, data?: object): Promise<AxiosResponse> {
    return this.instance.put(url, data);
  }

  protected delete(url: string, data?: object): Promise<AxiosResponse> {
    return this.instance.delete(url, { data });
  }

  protected patch(url: string, data?: object): Promise<AxiosResponse> {
    return this.instance.patch(url, data);
  }

  protected postFormData(url: string, data?: any): Promise<AxiosResponse> {
    return this.rawMultipart('post', url, data);
  }

  protected patchFormData(url: string, data?: any): Promise<AxiosResponse> {
    return this.rawMultipart('patch', url, data);
  }

  protected rawMultipart(
    method: string,
    url: string,
    data: any,
  ): Promise<AxiosResponse> {
    const formData = new FormData();
    if (data) {
      Object.keys(data).forEach(key => {
        formData.append(key, data[key]);
      });
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.instance({
      method,
      url,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }
}
