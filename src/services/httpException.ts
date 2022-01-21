import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { logger } from "./logger";

export default class HttpException extends Error {
  config: unknown;
  headers: string[];
  data: string;
  request: unknown;
  status: number;
  statusText: string;

  constructor(
    status: number,
    statusText: string,
    headers: string[],
    data: string,
    config: unknown,
    request: unknown
  ) {
    super(data);

    this.status = status;
    this.statusText = statusText;
    this.headers = headers;
    this.data = data;
    this.config = config;
    this.request = request;
  }
}

axios.interceptors.response.use(
  (res) => res,
  ({ response }: { response: AxiosResponse<string> }) => {
    const expectedError = response.status >= 400 && response.status < 500;

    if (!expectedError) {
      logger.log(response);
      // toast.error(response.data);
      toast.error("An unexpected error occurred");
    }

    return Promise.reject(response);
  }
);

export const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
