import axios from "axios";
import { GenreType } from "../types/GenreType";

export const getGenres = async () => {
  const { data } = await axios.get<GenreType[]>(
    "http://localhost:5000/api/genres"
  );

  return data;
};
