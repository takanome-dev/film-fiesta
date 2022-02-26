import { GenreType } from "../types/GenreType";
import { MovieType } from "../types/MovieType";

export type InitialStateType = {
	movies: MovieType[];
	genres: GenreType[];
	filteredMovies?: MovieType[];
	totalMovies?: number;
	pageSize: number;
	currentPage: number;
	currentRoute: string;
	searchQuery: string;
	selectedCategory: string;
	selectedGenre: { _id: string; name: string };
	user: {
		_id: string;
		name: string;
		email: string;
		iat: number;
		imageUrl: string;
	};
	onDelete?: (id: string) => Promise<void>;
	onGenreSelected?: (genre: GenreType) => void;
	onPageChange?: (pageNumber: number) => void;
	onRouteChange?: (route: string) => void;
	onSearch?: (query: string) => void;
};

export type ActionType = {
	type: string;
	payload: any;
};
