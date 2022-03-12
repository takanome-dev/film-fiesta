import { http } from "./http";

const endpoint = `${process.env.REACT_APP_API_URL}/profile`;

export const updateProfile = async (file: FormData) => {
	const { data } = await http.post(endpoint, file);
	return data;
};
