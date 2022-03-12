import { FeedbackType } from "../components/types";
import { http } from "./http";

const endpoint = `${process.env.REACT_APP_API_URL}/feedbacks`;

export const sendFeedback = async (feedback: FeedbackType) => {
	const { data } = await http.post(endpoint, feedback);
	return data;
};
