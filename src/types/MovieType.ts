import { GenreType } from "./GenreType";

export type MovieType = {
  _id: string;
  title: string;
  genre: GenreType;
  numberInStock: number;
  dailyRentalRate: number;
  publishDate?: string;
  liked?: boolean;
};

export type NewMovieType = {
  title: string;
  genreId: string;
  numberInStock: number;
  dailyRentalRate: number;
};
