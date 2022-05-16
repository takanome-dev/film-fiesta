import { useEffect } from "react";
import { removeToken } from "../services/auth";

const Logout = (): null  => {
	useEffect(() => {
		removeToken();
		window.location.pathname = "/";
	}, []);

	return null;
};

export default Logout;
