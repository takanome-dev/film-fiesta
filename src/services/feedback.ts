import { Feedback } from "../components/types";
import http from "./http";

const endpoint = "/feedbacks";

export const getFeedbacks = async () => {
	const { data } = await http.get<Feedback[]>(endpoint);
	return data;
};

export const sendFeedback = async (feedback: Feedback) => {
	const { data } = await http.post(endpoint, feedback);
	return data;
};
