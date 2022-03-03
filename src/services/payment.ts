import { http } from "./http";
const endpoint = `${process.env.REACT_APP_API_URL}/payment`;

export const getPaymentIntent = async () => {
	const { data } = await http.post(endpoint);
	return data;
};
