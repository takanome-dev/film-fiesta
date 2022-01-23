import { GenreType } from "../types/GenreType";
import { MovieType } from "../types/MovieType";

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

export type StateType = {
  movies: MovieType[];
  genres: GenreType[];
  pageSize: number;
  currentPage: number;
  selectedGenre: GenreType;
  searchQuery: string;
  sortColumn: SortColumnType;
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

type LoginType = {
  username: string;
  password: string;
};

type RegisterType = {
  username: string;
  password: string;
  name: string;
};

type MovieFormType = {
  title: string;
  genreId: string | undefined;
  numberInStock: number;
  dailyRentalRate: number;
};

export type FormType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: LoginType | RegisterType | MovieFormType | any;
  genres?: GenreType[];
  errors: Record<string, string>;
};

export type FormProps = {
  match: MatchType;
  history: HistoryType;
};

export type SearchProps = {
  value: string;
  onSearch: (query: string) => void;
};

// export type LoginFormType = {
//   /**
//    * @ref https://stackoverflow.com/questions/56568423/typescript-no-index-signature-with-a-parameter-of-type-string-was-found-on-ty
//    */
//   data: Record<string, any>;
//   errors: Record<string, any>;
// };
