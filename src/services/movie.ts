import http from "./http";

export const getMovies = async (page: number) => {
	const { data } = await http.get<MoviesResponse>(`/movies/${page}`);
	return data;
};

export const getMoviesByQuery = async (page: number, query?: string) => {
	const { data } = await http.post<MoviesResponse>("/search", {
		query,
		page,
	});
	return data;
};

export const getTrendingMovies = async (page: number) => {
	const { data } = await http.get<MoviesResponse>(
		`/movies/trending/${page}`
	);
	return data;
};

export const getPopularMovies = async (page: number) => {
	const { data } = await http.get<MoviesResponse>(
		`/movies/popular/${page}`
	);
	return data;
};

export const getMovieById = async (id: string) => {
	const { data } = await http.get<Movies>(`/movies/${id}`);
	return data;
};

export const getMovieDetails = async (id: number) => {
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
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	}, {} as any);

	return result as MovieDetails;
};