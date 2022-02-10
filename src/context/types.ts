import { GenreType } from "../types/GenreType";
import { MovieType } from "../types/MovieType";

export type InitialStateType = {
	movies: MovieType[];
	genres: GenreType[];
	pageSize: number;
	currentPage: number;
	searchQuery: string;
	selectedGenre: { _id: string; name: string };
	onDelete?: (id: string) => Promise<void>;
	onGenreSelected?: (genre: GenreType) => void;
	onPageChange?: (pageNumber: number) => void;
	onSearch?: (query: string) => void;
};

export type ActionType = {
	type: string;
	payload: any;
};
