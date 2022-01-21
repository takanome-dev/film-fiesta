import axios from "axios";
import { logger } from "./logger";
import { GenreType } from "../types/GenreType";

export const getGenres = async () => {
  try {
    const { data } = await axios.get<GenreType[]>(
      "http://localhost:5000/api/genres"
    );

    return data;
  } catch (err) {
    logger.log(err);
  }
};
