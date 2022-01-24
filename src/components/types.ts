import { GenreType } from "../types/GenreType";
import { MovieType, NewMovieType } from "../types/MovieType";

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

export type SortColumnType = {
  path: string;
  order: OrderType;
};

export type PaginationProps = {
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
  itemsCount: number;
  pageSize: number;
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
};

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

// ! States Types

export type AppStateType = {
  user?: JwtType;
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
  searchQuery: string;
  sortColumn: SortColumnType;
};

// ! Props Types

export type FormProps = {
  match: MatchType;
  history: HistoryType;
};

export type SearchProps = {
  value: string;
  onSearch: (query: string) => void;
};
