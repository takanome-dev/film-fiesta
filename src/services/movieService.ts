import axios from "axios";
import { MovieType } from "../types/MovieType";

export const getMovies = async () => {
  const { data } = await axios.get<MovieType[]>(
    "http://localhost:5000/api/movies"
  );

  return data;
};
