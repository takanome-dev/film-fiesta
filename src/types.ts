export interface Movies {
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

// export interface Item {
// 	poster_path: string;
// 	title?: string;
// 	name?: string;
// 	overview: string;
// 	backdrop_path: string;
// 	id: number;
// 	media_type: "tv" | "movie";
// 	vote_average: number;
// }

export interface MovieDetails {
	data: Movies;
	similar: Movies[];
	videos: VideoTrailer[];
}

export interface VideoTrailer {
	name: string;
	key: string;
}

export interface MoviesResponse {
	dates: { maximum: string; minimum: string };
	page: number;
	results: Movies[];
	total_pages: number;
	total_results: number;
}

export interface Genres {
	id: string;
	name: string;
}

export interface GenresResponse {
	genres: { id: string; name: string }[];
}
