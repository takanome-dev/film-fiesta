import { GenreType } from "../types/GenreType";
import { MovieType } from "../types/MovieType";

export type StateType = {
  movies: MovieType[];
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
  movies: MovieType[];
  onDelete: Function;
  onLike: Function;
};

export type LikeType = {
  liked: boolean;
  onLike: Function;
};
