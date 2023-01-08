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

export const setJwt = (jwt: string): string  => {
	return (axios.defaults.headers.common["X-Auth-Token"] = jwt);
};

console.log({
	// process: process.env,
	VITE_SENTRY_DSN: import.meta.env.VITE_SENTRY_DSN,
	VITE_API_URL: import.meta.env.VITE_API_URL,
	VITE_TMDB_IMAGE: import.meta.env.VITE_TMDB_IMAGE,
	VITE_TMDB_URL: import.meta.env.VITE_TMDB_URL,
	VITE_TMDB_VIDEO: import.meta.env.VITE_TMDB_VIDEO,
	VITE_NODE_VERSION: import.meta.env.VITE_NODE_VERSION,
});
const http = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
});

export default http;
