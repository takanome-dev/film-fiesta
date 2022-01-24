import { http } from "./http";
import { GenreType } from "../types/GenreType";

const endpoint = `${process.env.REACT_APP_API_URL}/genres`;

export const getGenres = async () => {
  const { data } = await http.get<GenreType[]>(endpoint);
  return data;
};
