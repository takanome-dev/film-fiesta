/* eslint-disable @typescript-eslint/no-non-null-assertion */
import jwt_decode from "jwt-decode";
import { JwtType, LoginUserType } from "../components/types";
import { http, setJwt } from "./http";

const endpoint = `${process.env.REACT_APP_API_URL}/auth`;

export const logUser = async (user: LoginUserType) => {
  const { data } = await http.post(endpoint, user);
  // localStorage.setItem("token", data);
  console.log(typeof data)
  setToken(data)
};

export const getToken = () => localStorage.getItem("token")!;
export const setToken = (token: string) => localStorage.setItem("token", token);
export const removeToken = () => localStorage.removeItem("token");

export const getCurrentUser = (): JwtType | null => {
  try {
    const token = getToken();
    return jwt_decode(token!);
  } catch (err) {
    return null;
  }
};

setJwt(getToken());
