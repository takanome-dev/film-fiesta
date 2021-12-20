import { GenreType, MoviesType } from "../services/types";

export type StateType = {
  movies: MoviesType[];
  genres: GenreType[];
  pageSize: number;
  currentPage: number;
  selectedGenre: GenreType;
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
  movies: MoviesType[];
  onDelete: Function;
  onLike: Function;
};

export type LikeType = {
  liked: boolean;
  onLike: Function;
};
