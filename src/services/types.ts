export type MoviesType = {
  _id: string;
  title: string;
  genre: GenreType;
  numberInStock: number;
  dailyRentalRate: number;
  publishDate?: string;
  liked?: boolean;
};

export type GenreType = {
  _id: string;
  name: string;
};
