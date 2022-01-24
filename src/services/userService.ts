import { RegisterUserType } from "../components/types";
import { http } from "./http";

const endpoint = `${process.env.REACT_APP_API_URL}/users`;

export const registerUser = async (user: RegisterUserType) => {
  const { headers } = await http.post(endpoint, user);
  return headers["x-auth-token"];
};
