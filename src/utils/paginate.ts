import _ from "lodash";
import { MovieType } from "../types/MovieType";

export const paginate = (
  items: MovieType[],
  pageNumber: number,
  pageSize: number
) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
};
