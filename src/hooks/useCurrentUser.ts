import jwt_decode from "jwt-decode";

import { getToken } from "@/services/auth";

export default function useCurrentUser () {
  let user: Jwt | null;

	try {
		const token = getToken();
		user = jwt_decode(token);
	} catch (err) {
		user = null;
	}

  return user
};