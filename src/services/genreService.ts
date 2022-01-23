import { http } from "./http";
import { GenreType } from "../types/GenreType";

export const getGenres = async () => {
  const { data } = await http.get<GenreType[]>(
    "http://localhost:5000/api/genres"
  );

  return data;
};
