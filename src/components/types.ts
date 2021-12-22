import { GenreType } from "../types/GenreType";
import { MovieType } from "../types/MovieType";

type ParamsType = {
  id: string;
};

type MatchType = {
  params: ParamsType;
};

export type MovieFormType = {
  match: MatchType;
};

type OrderType = boolean | "asc" | "desc";

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
  sortColumn: SortColumnType;
};

export type PaginationProps = {
  currentPage: number;
  onPageChange: Function;
  itemsCount: number;
  pageSize: number;
};

export type ListGroupType = {
  items: GenreType[];
  selectedItem: GenreType;
  onItemSelected: Function;
};

export type MoviesTableType = {
  movies: MovieType[];
  sortColumn: SortColumnType;
  handleDelete: Function;
  handleLike: Function;
  handleSort: Function;
};

export type ColumnType = {
  path?: string;
  label?: string;
  content?: Function;
};

export type TableType = {
  columns: ColumnType[];
  sortColumn: SortColumnType;
  handleSort: Function;
  data: MovieType[];
};

export type TableHeaderType = {
  handleSort: Function;
  columns: ColumnType[];
  sortColumn: SortColumnType;
};

export type TableBodyType = {
  data: MovieType[];
  columns: ColumnType[];
};

export type LikeType = {
  liked: boolean;
  onLike: Function;
};
