import { GenreType } from "../types/GenreType";
import { MovieType } from "../types/MovieType";

export type InitialStateType = {
	movies: MovieType[];
	genres: GenreType[];
	pageSize: number;
	currentPage: number;
	searchQuery: string;
	selectedGenre: { _id: string; name: string };
	handleDeleteMovie?: (id: string) => Promise<void>;
	handleSelectedGenre?: (genre: GenreType) => void;
	handlePageChange?: (pageNumber: number) => void;
	onSearch?: (query: string) => void;
};

export type ActionType = {
	type: string;
	payload: any;
};
