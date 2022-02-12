import { GenreType } from "../types/GenreType";
import { MovieType } from "../types/MovieType";

export type InitialStateType = {
	movies: MovieType[];
	genres: GenreType[];
	pageSize: number;
	currentPage: number;
	currentRoute: string;
	searchQuery: string;
	selectedGenre: { _id: string; name: string };
	onDelete?: (id: string) => Promise<void>;
	onGenreSelected?: (genre: GenreType) => void;
	onPageChange?: (pageNumber: number) => void;
	onRouteChange?: (route: string) => void;
	onSearch?: (query: string) => void;
	filteredMovies?: MovieType[];
	totalMovies?: number;
};

export type ActionType = {
	type: string;
	payload: any;
};
