import { GenresResponse } from "../types";
import http from "./http";

const endpoint = "/genres";

export const getGenres = async () => {
	const { data } = await http.get<GenresResponse>(endpoint);
	return data;
};
