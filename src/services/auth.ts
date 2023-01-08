/* eslint-disable @typescript-eslint/no-non-null-assertion */
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

export const getToken = (): string  => localStorage.getItem("token")!;
export const setToken = (token: string): void  => localStorage.setItem("token", token);
export const removeToken = (): void  => localStorage.removeItem("token");

setJwt(getToken());
