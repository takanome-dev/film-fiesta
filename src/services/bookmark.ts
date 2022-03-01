import { getCurrentUser } from "./auth";
import { http } from "./http";

const endpoint = `${process.env.REACT_APP_API_URL}/bookmarks`;

type BookmarkRequestType = {
	userId: string;
	movieId: string;
};

export const getBookmarks = async () => {
	const user = getCurrentUser();
	const { data } = await http.get(`${endpoint}`, {
		headers: { "X-User-Id": user!._id! },
	});
	return data;
};

export const saveBookmark = async (bookmark: BookmarkRequestType) => {
	const { data } = await http.post(`${endpoint}`, bookmark);
	return data;
};

export const deleteBookmark = async (movieId: string, userId: string) => {
	const { data } = await http.delete(`${endpoint}/${movieId}/${userId}`);
	return data;
};
