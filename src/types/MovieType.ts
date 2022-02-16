import { GenreType } from "./GenreType";

export type MovieType = {
	_id: string;
	title: string;
	genres: GenreType[];
	dateRelease: string;
	url: string;
	overview: string;
	category: "popular" | "trending";
	voteAverage: number;
	numberInStock: number;
	dailyRentalRate: number;
	// publishDate?: string;
	liked?: boolean;
};

export type NewMovieType = {
	_id?: string;
	title: string;
	genreId: string;
	numberInStock: number;
	dailyRentalRate: number;
};
