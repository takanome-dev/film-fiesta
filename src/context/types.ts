import {
	QueryObserverResult,
	RefetchOptions,
	RefetchQueryFilters,
} from "react-query";
import { FeedbackType } from "../components/types";
import { BookmarkType } from "../types/BookmarkType";
import { FavoriteType } from "../types/FavoriteType";
import { GenreType } from "../types/GenreType";
import { MovieType } from "../types/MovieType";
import { RentalType } from "../types/RentalType";

export type InitialStateType = {
	movies: MovieType[];
	genres: GenreType[];
	rentals: RentalType[];
	favorites: FavoriteType[];
	bookmarks: BookmarkType[];
	feedbacks: FeedbackType[];
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
		isAdmin: boolean;
		iat: number;
		imageUrl: string;
	};
	dispatch?: React.Dispatch<ActionType>;
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
	onRefetchFeedbacks?: <TPageData>(
		options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
	) => Promise<QueryObserverResult<FeedbackType[], Error>>;
};

export type ActionType = {
	type: string;
	payload: any;
};
