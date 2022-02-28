import { RegisterUserType } from "../components/types";
import { removeToken, setToken } from "./auth";
import { http } from "./http";

const endpoint = `${process.env.REACT_APP_API_URL}/users`;

export const registerUser = async (user: RegisterUserType) => {
	const { headers } = await http.post(endpoint, user);
	localStorage.setItem("token", headers["x-auth-token"]);
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
