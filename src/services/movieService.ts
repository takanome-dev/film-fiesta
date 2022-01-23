import { http } from "./http";
import { MovieType, NewMovieType } from "../types/MovieType";

export const getMovies = async () => {
  const { data } = await http.get<MovieType[]>(
    "http://localhost:5000/api/movies"
  );

  return data;
};

export const getMovie = async (id: string) => {
  const { data } = await http.get<MovieType>(
    `http://localhost:5000/api/movies/${id}`
  );

  return data;
};

export const saveMovie = async (movie: NewMovieType) => {
  const { data } = await http.post<MovieType>(
    "http://localhost:5000/api/movies",
    movie
  );

  return data;
};

export const deleteMovie = async (id: string) => {
  const { data } = await http.delete(`http://localhost:5000/api/movies/${id}`);

  return data;
};
