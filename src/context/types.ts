import {
	QueryObserverResult,
	RefetchOptions,
	RefetchQueryFilters,
} from "react-query";
import { FavoriteType } from "../types/FavoriteType";
import { GenreType } from "../types/GenreType";
import { MovieType } from "../types/MovieType";

export type InitialStateType = {
	movies: MovieType[];
	genres: GenreType[];
	favorites: FavoriteType[];
	filteredMovies?: MovieType[];
	totalMovies?: number;
	pageSize: number;
	currentPage: number;
	like: boolean;
	bookmark: boolean;
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
	onLike?: (isLike: boolean) => void;
	onBookmark?: (isBookmark: boolean) => void;
	onGenreSelected?: (genre: GenreType) => void;
	onPageChange?: (pageNumber: number) => void;
	onRouteChange?: (route: string) => void;
	onSearch?: (query: string) => void;
	onRefetchMovie?: <TPageData>(
		options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
	) => Promise<QueryObserverResult<MovieType[], Error>>;
	onRefetchFavorites?: <TPageData>(
		options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
	) => Promise<QueryObserverResult<FavoriteType[], Error>>;
};

export type ActionType = {
	type: string;
	payload: any;
};
