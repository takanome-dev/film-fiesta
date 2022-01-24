import { http } from "./http";
import { MovieType, NewMovieType } from "../types/MovieType";

const endpoint = `${process.env.REACT_APP_API_URL}/movies`;

export const getMovies = async () => {
  const { data } = await http.get<MovieType[]>(`${endpoint}`);
  return data;
};

export const getMovie = async (id: string) => {
  const { data } = await http.get<MovieType>(`${endpoint}/${id}`);
  return data;
};

export const saveMovie = async (movie: NewMovieType) => {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return await http.put<NewMovieType>(`${endpoint}/${movie._id}`, body);
  }

  return await http.post<NewMovieType>(`${endpoint}`, movie);
};

export const deleteMovie = async (id: string) =>
  await http.delete(`${endpoint}/${id}`);
