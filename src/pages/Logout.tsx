import { useEffect } from "react";
import { HistoryType } from "../components/types";
import { ActionType } from "../context/types";
import { getCurrentUser, removeToken } from "../services/auth";

type Props = {
	dispatch: React.Dispatch<ActionType> | undefined;
	history: HistoryType;
};

const Logout: React.FC<Props> = ({ dispatch, history }) => {
	useEffect(() => {
		removeToken();
		const user = getCurrentUser();
		dispatch?.({ type: "GET_CURRENT_USER", payload: user });
		history.push("/");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return null;
};

export default Logout;
