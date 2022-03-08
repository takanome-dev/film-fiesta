import { RegisterUserType } from "../components/types";
import { removeToken, setToken } from "./auth";
import { http } from "./http";

const endpoint = `${process.env.REACT_APP_API_URL}/users`;

export const registerUser = async (user: RegisterUserType) => {
	const { data } = await http.post(endpoint, user);
	setToken(data);
};

export const updateUser = async (
	user: Pick<RegisterUserType, "name" | "email">,
	id: string
) => {
	const { data } = await http.put(`${endpoint}/${id}`, user);
	removeToken();
	setToken(data);
};

type UpdatePasswordType = {
	currentPassword: string;
	newPassword: string;
};

export const updatePassword = async (
	password: UpdatePasswordType,
	id: string
) => {
	const { data } = await http.put(`${endpoint}/reset/${id}`, password);
	return data;
};
