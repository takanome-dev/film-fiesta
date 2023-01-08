// <reference types="vite/client" />

interface Movies {
	adult?: boolean;
	backdrop_path?: string;
	genre_ids?: number[];
	genres?: { id: number; name: string }[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

interface MovieDetails {
	data: Movies;
	similar: Movies[];
	videos: VideoTrailer[];
}

interface VideoTrailer {
	name: string;
	key: string;
}

interface MoviesResponse {
	dates: { maximum: string; minimum: string };
	page: number;
	results: Movies[];
	total_pages: number;
	total_results: number;
}

interface Genres {
	id: string;
	name: string;
}

interface GenresResponse {
	genres: { id: string; name: string }[];
}

interface Jwt {
	_id?: string;
	email?: string;
	name?: string;
	iat?: number;
	isAdmin?: boolean;
	imageUrl?: string;
}