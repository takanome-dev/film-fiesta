import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { logger } from "./logger";

axios.interceptors.response.use(
  (res) => res,
  ({ response }: { response: AxiosResponse<string> }) => {
    const expectedError = response.status >= 400 && response.status < 500;

    if (!expectedError) {
      logger.log(response);
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
