/* eslint-disable @typescript-eslint/no-non-null-assertion */
import jwt_decode from "jwt-decode";
import { Jwt } from "../components/types";
import http, { setJwt } from "./http";

const endpoint = "/auth";

interface Login {
	email: string;
	password: string;
}

export const logUser = async (user: Login) => {
	const { data } = await http.post(endpoint, user);
	setToken(data);
};

export const getToken = () => localStorage.getItem("token")!;
export const setToken = (token: string) => localStorage.setItem("token", token);
export const removeToken = () => localStorage.removeItem("token");

export const getCurrentUser = (): Jwt | null => {
	try {
		const token = getToken();
		return jwt_decode(token);
	} catch (err) {
		return {};
	}
};

setJwt(getToken());
