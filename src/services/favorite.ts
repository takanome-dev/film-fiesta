import { http } from "./http";

const endpoint = `${process.env.REACT_APP_API_URL}/favorites`;

type FavoriteRequestType = {
	userId: string;
	movieId: string;
};

export const getFavorites = async () => {
	const { data } = await http.get(endpoint);
	return data;
};

export const saveFavorite = async (fav: FavoriteRequestType) => {
	const { data } = await http.post(`${endpoint}`, fav);
	return data;
};

export const deleteFavorite = async (movieId: string) => {
	const { data } = await http.delete(`${endpoint}/${movieId}`);
	return data;
};

export const clearFavorites = async () => {
	const { data } = await http.delete(`${endpoint}/clear`);
	return data;
};
