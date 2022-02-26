/* eslint-disable @typescript-eslint/no-explicit-any */
import { StaticContext } from "react-router";
import { RouteComponentProps } from "react-router-dom";
import { GenreType } from "../types/GenreType";
import { MovieType, NewMovieType } from "../types/MovieType";

// ! Type Definitions

type ParamsType = {
	id: string;
};

type MatchType = {
	params: ParamsType;
};

type OrderType = boolean | "asc" | "desc";

type HistoryType = {
	push: (url: string) => void;
	replace: (url: string) => void;
};

type LocationType = {
	state: {
		from: {
			pathname: string;
		};
	};
};

export type SortColumnType = {
	path: string;
	order: OrderType;
};

export type PaginationProps = {
	// currentPage: number;
	// onPageChange: (pageNumber: number) => void;
	// itemsCount: number;
	// pageSize: number;
	totalMovies: number;
};

export type ListGroupType = {
	items: GenreType[];
	selectedItem: GenreType;
	onItemSelected: (genre: GenreType) => void;
};

export type MoviesTableType = {
	movies: MovieType[];
	sortColumn: SortColumnType;
	handleDelete: (id: string) => Promise<void | React.ReactText>;
	handleLike: (movie: MovieType) => void;
	handleSort: (sortColumn: SortColumnType) => void;
};

export type ColumnType = {
	path?: string;
	label?: string;
	content?: (movie: MovieType) => JSX.Element;
};

export type TableType = {
	columns: ColumnType[];
	sortColumn: SortColumnType;
	handleSort: (sortColumn: SortColumnType) => void;
	data: MovieType[];
};

export type TableHeaderType = {
	handleSort: (sortColumn: SortColumnType) => void;
	columns: ColumnType[];
	sortColumn: SortColumnType;
};

export type TableBodyType = {
	data: MovieType[];
	columns: ColumnType[];
};

export type LikeType = {
	liked: boolean;
	onLike: () => void;
};

export type LoginUserType = {
	email: string;
	password: string;
};

export type RegisterUserType = {
	email: string;
	password: string;
	name: string;
};

export type JwtType = {
	_id?: string;
	email?: string;
	name?: string;
	iat?: number;
	isAdmin?: boolean;
	imageUrl?: string;
};

export type FeedbackType = { subject: string; message: string };

// ! Errors Types

export type RegisterErrorType = {
	email?: string;
	name?: string;
	password?: string;
};

export type LoginErrorType = {
	email?: string;
	password?: string;
};

export type MovieErrorType = {
	_id?: string;
	title?: string;
	genreId?: string;
	numberInStock?: number;
	dailyRentalRate?: number;
};

// export type FeedbackErrorType = { subject?: string; message?: string };

// ! States Types

export type AppStateType = {
	user?: JwtType;
	searchQuery: string;
};

export type FormStateType = {
	data: any;
	errors: any;
	genres?: GenreType[];
};

export type RegisterStateType = {
	data: RegisterUserType;
	errors: RegisterErrorType;
};

export type LoginStateType = {
	data: LoginUserType;
	errors: LoginErrorType;
};

export type MovieFormStateType = {
	data: NewMovieType;
	genres: GenreType[];
	errors: MovieErrorType;
};

export type MoviesStateType = {
	movies: MovieType[];
	genres: GenreType[];
	pageSize: number;
	currentPage: number;
	selectedGenre: GenreType;
	// searchQuery: string;
	sortColumn: SortColumnType;
};

export type EditProfileState = {
	data: any;
	// data: { url?: string; name: string; email: string };
	// errors: { name?: string; email?: string };
};

// ! Props Types

export type FormProps = {
	match?: MatchType;
	history?: HistoryType;
	location?: LocationType;
	openFeedback?: boolean;
	setOpenFeedback?: React.Dispatch<React.SetStateAction<boolean>>;
};

export type MovieDetailsProps = {
	match: MatchType;
	history: HistoryType;
	location: LocationType;
};

export type SearchProps = {
	value: string;
	onSearch: (query: string) => void;
};

export type MoviesPropsType = {
	user?: JwtType;
};

export type PrivateRouteProps = {
	component?:
		| React.ComponentType<any>
		| React.ComponentType<RouteComponentProps<any, StaticContext, unknown>>;
	render?: (
		props: RouteComponentProps<any, StaticContext, unknown>
	) => React.ReactNode;
	path: string;
};

export type CardListProps = {
	movies: MovieType[];
	// handleLike: (movie: MovieType) => void;
};

export type CardProps = {
	movie: MovieType;
	handleLike?: (movie: MovieType) => void;
};

export type EditProfileProps = {
	editProfile: boolean;
	setEditProfile: React.Dispatch<React.SetStateAction<boolean>>;
};
