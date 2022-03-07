import { http } from "./http";
const endpoint = `${process.env.REACT_APP_API_URL}/payment`;

type PaymentRequest = {
	userId: string;
	movieId: string;
	returnedDate: string;
};

export const getClientSecret = async (userInfo: PaymentRequest) => {
	const { data } = await http.post(endpoint, userInfo);
	return data;
};
