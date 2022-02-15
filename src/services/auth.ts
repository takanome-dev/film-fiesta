/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { http, setJwt } from "./http";
import jwt_decode from "jwt-decode";
import { JwtType, LoginUserType } from "../components/types";

const endpoint = `${process.env.REACT_APP_API_URL}/auth`;

export const logUser = async (user: LoginUserType) => {
  const { data } = await http.post(endpoint, user);
  localStorage.setItem("token", data);
};

export const getToken = () => localStorage.getItem("token")!;

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
