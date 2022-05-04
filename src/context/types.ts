import {
	QueryObserverResult,
	RefetchOptions,
	RefetchQueryFilters
} from "react-query";
import { Feedback } from "../components/types";
import * as types from "../types";

export interface InitialState {
	movies: types.Movies[];
	genres: types.Genres[];
	feedbacks: Feedback[];
	filteredMovies?: types.Movies[];
	totalPages: number;
	moviesLength?: number;
	page: number;
	currentRoute: string;
	searchQuery: string;
	selectedGenre: { id: string; name: string };
	user: {
		_id: string;
		name: string;
		email: string;
		isAdmin: boolean;
		iat: number;
		imageUrl: string;
	};
	dispatch?: React.Dispatch<Action>;
	loadingMovies?: boolean;
	onDelete?: (id: string) => Promise<void>;
	onLike?: (isLike: boolean) => void;
	onBookmark?: (isBookmark: boolean) => void;
	onGenreSelected?: (genre: types.Genres) => void;
	onPageChange?: (pageNumber: number) => void;
	onRouteChange?: (route: string) => void;
	onSearch?: (query: string) => void;
	onRefetchMovies?: any;
	onRefetchFavorites?: <TPageData>(
		options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
	) => Promise<QueryObserverResult<any, unknown>>;
	onRefetchBookmarks?: <TPageData>(
		options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
	) => Promise<QueryObserverResult<any, unknown>>;
	onRefetchRentals?: <TPageData>(
		options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
	) => Promise<QueryObserverResult<any, unknown>>;
	onRefetchFeedbacks?: <TPageData>(
		options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
	) => Promise<QueryObserverResult<Feedback[], Error>>;
}

export interface Action {
	type: string;
	payload: any;
}
