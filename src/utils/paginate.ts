import _ from "lodash";
import { Movies } from "../types";

export const paginate = (
	items: Movies[],
	pageNumber: number,
	pageSize: number
) => {
	const startIndex = (pageNumber - 1) * pageSize;
	return _(items).slice(startIndex).take(pageSize).value();
};
