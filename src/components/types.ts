import { GenreType, MoviesType } from "../services/types";

export type PaginationProps = {
  // currentPage: number;
  onPageChange: Function;
  itemsCount: number;
  pageSize: number;
};

export type ListGroupType = {
  items: GenreType[];
  onItemSelected: Function;
};

export type MoviesTableType = {
  movies: MoviesType[];
};
