import { http } from "./http";

const endpoint = `${process.env.REACT_APP_API_URL}/bookmarks`;

type BookmarkRequestType = {
	userId: string;
	movieId: string;
};

export const getBookmarks = async () => {
	const { data } = await http.get(endpoint);
	return data;
};

export const saveBookmark = async (bookmark: BookmarkRequestType) => {
	const { data } = await http.post(`${endpoint}`, bookmark);
	return data;
};

export const deleteBookmark = async (movieId: string) => {
	const { data } = await http.delete(`${endpoint}/${movieId}`);
	return data;
};

export const clearBookmarks = async () => {
	const { data } = await http.delete(`${endpoint}/clear`);
	return data;
};
