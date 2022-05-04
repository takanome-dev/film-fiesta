import { removeToken, setToken } from "./auth";
import http from "./http";

const endpoint = "/users";

interface UpdatePassword {
	currentPassword: string;
	newPassword: string;
}

interface Register {
	name: string;
	email: string;
	password: string;
}

export const registerUser = async (user: Register) => {
	const { data } = await http.post(endpoint, user);
	setToken(data);
};

export const updateUser = async (
	user: Omit<Register, "password">,
	id: string
) => {
	const { data } = await http.put(`${endpoint}/${id}`, user);
	removeToken();
	setToken(data);
};

export const updatePassword = async (password: UpdatePassword, id: string) => {
	const { data } = await http.put(`${endpoint}/reset/${id}`, password);
	return data;
};
