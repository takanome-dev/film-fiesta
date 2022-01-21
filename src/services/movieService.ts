import axios from "axios";
// import { toast } from "react-toastify";
// import { logger } from "./logger";
import { MovieType, NewMovieType } from "../types/MovieType";

export const getMovies = async () => {
  const { data } = await axios.get<MovieType[]>(
    "http://localhost:5000/api/movies"
  );

  return data;
};

export const getMovie = async (id: string) => {
  const { data } = await axios.get<MovieType>(
    `http://localhost:5000/api/movies/${id}`
  );

  return data;
};

export const saveMovie = async (movie: NewMovieType) => {
  const { data } = await axios.post<MovieType>(
    "http://localhost:5000/api/movies",
    movie
  );

  return data;
};

export const deleteMovie = async (id: string) => {
  const { data } = await axios.delete(`http://localhost:5000/api/movies/${id}`);

  return data;
};
