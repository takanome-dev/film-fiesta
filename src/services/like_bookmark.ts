import { http } from "./http";

const endpoint = `${process.env.REACT_APP_API_URL}/favorites`;

type FavoriteRequestType = {
	userId: string;
	movieId: string;
};

export const saveFavorite = async (fav: FavoriteRequestType) => {
	const { data } = await http.post(`${endpoint}`, fav);
	return data;
};

export const deleteFavorite = async (movieId: string, userId: string) => {
	const { data } = await http.delete(`${endpoint}/${movieId}/${userId}`);
	return data;
};
