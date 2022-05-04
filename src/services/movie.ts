// /* eslint-disable  import/no-anonymous-default-export */
import * as types from "../types";
import http from "./http";

const getMovies = async (page: number) => {
	const { data } = await http.get<types.MoviesResponse>(`/movies/${page}`);
	return data;
};

const getMoviesByQuery = async (page: string, query?: string) => {
	const { data } = await http.post<types.MoviesResponse>("/search", {
		query,
		page,
	});
	return data;
};

const getTrendingMovies = async (page: string) => {
	const { data } = await http.get<types.MoviesResponse>(
		`/movies/trending/${page}`
	);
	return data;
};

const getPopularMovies = async (page: string) => {
	const { data } = await http.get<types.MoviesResponse>(
		`/movies/popular/${page}`
	);
	return data;
};

const getMovieById = async (id: string) => {
	const { data } = await http.get<types.Movies>(`/movies/${id}`);
	return data;
};

const getMovieDetails = async (id: string) => {
	const labels = ["data", "similar", "videos"];

	const result = (
		await Promise.all([
			await http.get(`/movies/movie/${id}`),
			await http.get(`/movies/similar/${id}`),
			await http.get(`/movies/videos/${id}`),
		])
	).reduce((final, current, index) => {
		if (labels[index] === "data") {
			final[labels[index]] = current.data;
		} else if (labels[index] === "similar") {
			final[labels[index]] = current.data.results;
		} else if (labels[index] === "videos") {
			final[labels[index]] = current.data.results;
		}

		return final;
	}, {} as any);
	return result as types.MovieDetails;
};

export default {
	getMovies,
	getTrendingMovies,
	getPopularMovies,
	getMoviesByQuery,
	getMovieById,
	getMovieDetails,
};
