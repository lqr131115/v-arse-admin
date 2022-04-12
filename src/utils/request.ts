/**
 * @description axios 二次封装
 * @author lqr
 */

import axios, { AxiosRequestConfig } from "axios";
import { useUserStore } from "@/store/modules/user";
import { msgError, noticeError } from "@/utils/notice";
import { ResultEnum, RequestEnum } from "@/enums/httpEnum";
import envConfig from "../config/env";

const service = axios.create({
  baseURL: envConfig.mockUrl,
  timeout: 3000,
});

service.interceptors.request.use(
  (config) => {
    const userStore = useUserStore();
    if (userStore.token) {
      (config.headers as any).Authorization = userStore.token;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err.message);
  }
);

service.interceptors.response.use(
  (res) => {
    const { code, msg } = res.data;
    // 请求成功 业务成功
    if (code === ResultEnum.SUCCESS) {
      return res.data;
    }
    // 请求成功 业务失败
    else {
      msgError(msg);
      return Promise.reject(new Error(msg));
    }
  },
  (err) => {
    const userStore = useUserStore();
    // 被动退出 token失效(服务端返回特定状态码)
    if (err.response && err.response.data && err.response.data.code === 401) {
      userStore.logout();
    }
    // 请求失败
    noticeError(err.message);
    return Promise.reject(new Error(err.message));
  }
);

const request = (options: AxiosRequestConfig) => {
  options.method = options.method || RequestEnum.GET;

  const isMock: boolean = envConfig.mock;

  if (envConfig.env === "production") {
    service.defaults.baseURL = envConfig.baseUrl;
  } else {
    service.defaults.baseURL = isMock ? envConfig.mockUrl : envConfig.baseUrl;
  }

  if (options.method.toUpperCase() === RequestEnum.GET) {
    options.params = options.data;
  }
  return service(options);
};

export default request;
