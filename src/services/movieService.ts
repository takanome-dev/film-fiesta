import { http } from "./http";
import { MovieType, NewMovieType } from "../types/MovieType";

const endpoint = process.env.REACT_APP_API_URL;

export const getMovies = async () => {
  const { data } = await http.get<MovieType[]>(`${endpoint}/movies`);

  return data;
};

export const getMovie = async (id: string) => {
  const { data } = await http.get<MovieType>(`${endpoint}/movies/${id}`);

  return data;
};

export const saveMovie = async (movie: NewMovieType) => {
  const { data } = await http.post<MovieType>(`${endpoint}/movies`, movie);

  return data;
};

export const deleteMovie = async (id: string) => {
  const { data } = await http.delete(`${endpoint}/movies/${id}`);

  return data;
};
