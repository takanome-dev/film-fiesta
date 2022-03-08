import {
	QueryObserverResult,
	RefetchOptions,
	RefetchQueryFilters,
} from "react-query";
import { BookmarkType } from "../types/BookmarkType";
import { FavoriteType } from "../types/FavoriteType";
import { GenreType } from "../types/GenreType";
import { MovieType } from "../types/MovieType";
import { RentalType } from "../types/RentalType";

export type InitialStateType = {
	movies: MovieType[];
	genres: GenreType[];
	favorites: FavoriteType[];
	bookmarks: BookmarkType[];
	rentals: RentalType[];
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
	loadingMovies?: boolean;
	onDelete?: (id: string) => Promise<void>;
	onLike?: (isLike: boolean) => void;
	onBookmark?: (isBookmark: boolean) => void;
	onGenreSelected?: (genre: GenreType) => void;
	onPageChange?: (pageNumber: number) => void;
	onRouteChange?: (route: string) => void;
	onSearch?: (query: string) => void;
	onRefetchMovies?: <TPageData>(
		options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
	) => Promise<QueryObserverResult<MovieType[], Error>>;
	onRefetchFavorites?: <TPageData>(
		options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
	) => Promise<QueryObserverResult<FavoriteType[], Error>>;
	onRefetchBookmarks?: <TPageData>(
		options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
	) => Promise<QueryObserverResult<BookmarkType[], Error>>;
	onRefetchRentals?: <TPageData>(
		options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
	) => Promise<QueryObserverResult<RentalType[], Error>>;
};

export type ActionType = {
	type: string;
	payload: any;
};
