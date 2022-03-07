import { getCurrentUser } from "./auth";
import { http } from "./http";

const endpoint = `${process.env.REACT_APP_API_URL}/rentals`;

type RentalRequestType = {
	userId: string;
	movieId: string;
	returnedDate: string;
	paymentIntentId: string | undefined;
};

export const getRentals = async () => {
	const user = getCurrentUser();
	const { data } = await http.get(`${endpoint}`, {
		headers: { "X-User-Id": user!._id! },
	});
	return data;
};

export const createRental = async (req: RentalRequestType) => {
	const { data } = await http.post(endpoint, req);
	return data;
};
