import { http } from "./http";
import { LoginUserType } from "../components/types";

const endpoint = `${process.env.REACT_APP_API_URL}/auth`;

export const logUser = async (user: LoginUserType) => {
  const { data } = await http.post(endpoint, user);
  return data;
};
