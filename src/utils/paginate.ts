import _ from "lodash";
import { MoviesType } from "../services/types";

export const paginate = (
  items: MoviesType[],
  pageNumber: number,
  pageSize: number
) => {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
};
