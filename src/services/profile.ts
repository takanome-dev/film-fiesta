import { http } from "./http";

const endpoint = `${process.env.REACT_APP_API_URL}/image`;

export const updateProfile = async (file: FormData, id: string) => {
	const { data } = await http.post(endpoint, file, {
		headers: { "X-User-Id": id },
	});
	return data;
};
