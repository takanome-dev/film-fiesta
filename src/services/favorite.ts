import { getCurrentUser } from "./auth";
import { http } from "./http";

const endpoint = `${process.env.REACT_APP_API_URL}/favorites`;

type FavoriteRequestType = {
	userId: string;
	movieId: string;
};

export const getFavorites = async () => {
	const user = getCurrentUser();
	const { data } = await http.get(`${endpoint}`, {
		headers: { "X-User-Id": user!._id! },
	});
	return data;
};

export const saveFavorite = async (fav: FavoriteRequestType) => {
	const { data } = await http.post(`${endpoint}`, fav);
	return data;
};

export const deleteFavorite = async (movieId: string, userId: string) => {
	const { data } = await http.delete(`${endpoint}/${movieId}/${userId}`);
	return data;
};

export const clearFavorites = async (userId: string) => {
	const { data } = await http.delete(`${endpoint}/${userId}`);
	return data;
};
