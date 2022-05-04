import http from "./http";

const endpoint = "/profile";

export const updateProfile = async (file: FormData) => {
	const { data } = await http.post(endpoint, file);
	return data;
};
