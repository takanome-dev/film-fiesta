import {
	QueryObserverResult,
	RefetchOptions,
	RefetchQueryFilters
} from "@tanstack/react-query";
import { Feedback } from "../components/types";

export interface InitialState {
	genres: Genres[];
	feedbacks: Feedback[];
	moviesLength?: number;
	page: number;
	currentRoute: string;
	searchQuery: string;
	selectedGenre: { id: string; name: string };
	dispatch?: React.Dispatch<Action>;
	onDelete?: (id: string) => Promise<void>;
	onLike?: (isLike: boolean) => void;
	onBookmark?: (isBookmark: boolean) => void;
	onGenreSelected?: (genre: Genres) => void;
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
