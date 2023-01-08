/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stripe, StripeElements } from "@stripe/stripe-js";
import {
	QueryObserverResult,
	RefetchOptions,
	RefetchQueryFilters,
} from "@tanstack/react-query";
import { RouteComponentProps } from "react-router-dom";
import { Action } from "../context/types";
// import { GenreType } from "../types/GenreType";

export interface Jwt {
	_id?: string;
	email?: string;
	name?: string;
	iat?: number;
	isAdmin?: boolean;
	imageUrl?: string;
}

export interface Feedback {
	_id?: string;
	subject: string;
	message: string;
	username?: string;
	email?: string;
}

export interface RegisterError {
	email?: string;
	name?: string;
	password?: string;
}

export interface LoginError {
	email?: string;
	password?: string;
}

// export type MovieErrorType = {
// 	_id?: string;
// 	title?: string;
// 	genreId?: string;
// 	numberInStock?: number;
// 	dailyRentalRate?: number;
// };

// export type FeedbackErrorType = { subject?: string; message?: string };

// ! States Types

export interface App {
	user?: Jwt;
	searchQuery: string;
}

export interface FormState {
	data: any;
	errors: any;
	// genres?: GenreType[];
	complete?: boolean;
	isProcessing?: boolean;
	isLoading?: boolean;
	movie?: any;
	url?: string;
}

export interface Register {
	data: {
		email: string;
		password: string;
		name: string;
	};
	errors: RegisterError;
}

export interface Login {
	data: {
		email: string;
		password: string;
	};
	errors: LoginError;
}

// export type MovieFormStateType = {
// 	data: NewMovieType;
// 	genres: GenreType[];
// 	errors: MovieErrorType;
// };

export interface MoviesState {
	movies: Movies[];
	// genres: GenreType[];
	pageSize: number;
	currentPage: number;
	// selectedGenre: GenreType;
	// searchQuery: string;
	sortColumn: {
		path: string;
		order: boolean | "asc" | "desc";
	};
}

export interface EditProfile {
	data: any;
	isLoading: boolean;
	// data: { url?: string; name: string; email: string };
	// errors: { name?: string; email?: string };
}

// ! Props Types

export interface FormProps {
	match?: { params: { id: string } };
	history?: {
		push: (url: string) => void;
		replace: (url: string) => void;
	};
	location?: {
		state: {
			from: {
				pathname: string;
			};
		};
	};
	// props?: { match?: MatchType; history?: HistoryType; location?: LocationType };
	openFeedback?: boolean;
	editPassword?: boolean;
	editProfile?: boolean;
	setOpenFeedback?: React.Dispatch<React.SetStateAction<boolean>>;
	setEditPassword?: React.Dispatch<React.SetStateAction<boolean>>;
	setEditProfile?: React.Dispatch<React.SetStateAction<boolean>>;
	movieId?: string;
	elements?: StripeElements | null;
	stripe?: Stripe | null;
	dispatch?: React.Dispatch<Action>;
	onRefetchRentals?: <TPageData>(
		options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
	) => Promise<QueryObserverResult<any, unknown>>;
	// onRefetchFavorites?: <TPageData>(
	// 	options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
	// ) => Promise<QueryObserverResult<any, unknown>>;
	// onRefetchBookmarks?: <TPageData>(
	// 	options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
	// ) => Promise<QueryObserverResult<any, unknown>>;
}

export interface MovieDetailsInt {
	match: { params: { id: string } };
	setMovieId: React.Dispatch<React.SetStateAction<string>>;
	// history: HistoryType;
	// location: LocationType;
	// props: RouteComponentProps<any, StaticContext, unknown>;
}

export interface Search {
	value: string;
	onSearch: (query: string) => void;
}

// export type MoviesPropsType = {
// 	user?: Jwt;
// };

export interface PrivateRouteInt {
	component?:
		| React.ComponentType<any>
		| React.ComponentType<RouteComponentProps<any, any, unknown>>;
	render?: (
		props: RouteComponentProps<any, any, unknown>
	) => React.ReactNode;
	path: string;
}

export interface CardList {
	movies: Movies[];
}

export interface CardInt {
	movie: Movies;
	handleLike?: (movie: Movies) => void;
	width?: string;
	height?: string;
}

export interface EditProfile {
	editProfile: boolean;
	setEditProfile: React.Dispatch<React.SetStateAction<boolean>>;
}
