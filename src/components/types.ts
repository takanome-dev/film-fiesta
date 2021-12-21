import { GenreType } from "../types/GenreType";
import { MovieType } from "../types/MovieType";

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

export type LikeType = {
  liked: boolean;
  onLike: Function;
};
