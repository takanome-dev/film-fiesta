import { http } from "./http";
const endpoint = `${process.env.REACT_APP_API_URL}/payment`;

type PaymentRequest = {
	userId: string;
	movieId: string;
	returnedDate: string;
};

export const getPaymentIntent = async (paymentIntent: PaymentRequest) => {
	const { data } = await http.post(endpoint, paymentIntent);
	return data;
};
