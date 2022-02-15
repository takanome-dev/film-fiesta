import { GenreType } from "../types/GenreType";
import { MovieType } from "../types/MovieType";

export type InitialStateType = {
	movies: MovieType[];
	genres: GenreType[];
	filteredMovies?: MovieType[];
	filteredMoviesByCategory?: MovieType[];
	totalMoviesFiltered?: number;
	totalMoviesFilteredByCategory?: number;
	pageSize: number;
	currentPage: number;
	currentRoute: string;
	searchQuery: string;
	selectedGenre: { _id: string; name: string };
	selectedCategory: string;
	onDelete?: (id: string) => Promise<void>;
	onGenreSelected?: (genre: GenreType) => void;
	onCategorySelected?: (category: string) => void;
	onPageChange?: (pageNumber: number) => void;
	onRouteChange?: (route: string) => void;
	onSearch?: (query: string) => void;
};

export type ActionType = {
	type: string;
	payload: any;
};
