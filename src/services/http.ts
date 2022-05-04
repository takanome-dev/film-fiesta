import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(
	(res) => res,
	({ response }: { response: AxiosResponse<string> }) => {
		const expectedError = response.status >= 400 && response.status < 500;

		if (!expectedError) {
			toast.error("An unexpected error occurred");
		}

		return Promise.reject(response);
	}
);

export const setJwt = (jwt: string) => {
	return (axios.defaults.headers.common["X-Auth-Token"] = jwt);
};

const http = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
});

export default http;
