// import axios from "axios";
import { logger } from "./logger";
import { GenreType } from "../types/GenreType";
import { http } from "./httpException";

export const getGenres = async () => {
  try {
    const { data } = await http.get<GenreType[]>(
      "http://localhost:5000/api/genres"
    );

    return data;
  } catch (err) {
    logger.log(err);
  }
};
