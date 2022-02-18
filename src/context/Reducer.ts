import {
	CURRENTPAGE,
	CURRENTROUTE,
	FETCHGENRES,
	FETCHMOVIES,
	GETCURRENTUSER,
	SEARCHQUERY,
	SELECTEDCATEGORY,
	SELECTEDGENRE,
} from "./Constant";
import { ActionType, InitialStateType } from "./types";

const reducer = (state: InitialStateType, action: ActionType) => {
	switch (action.type) {
		case SEARCHQUERY:
			return {
				...state,
				searchQuery: action.payload,
				currentPage: 1,
				selectedGenre: { _id: "", name: "" },
			};
		case GETCURRENTUSER:
			return {
				...state,
				user: action.payload,
			};
		case FETCHMOVIES:
			return {
				...state,
				movies: action.payload,
			};
		case FETCHGENRES:
			return {
				...state,
				genres: action.payload,
			};
		case CURRENTPAGE:
			return {
				...state,
				currentPage: action.payload,
			};
		case CURRENTROUTE:
			return {
				...state,
				currentRoute: action.payload,
			};
		case SELECTEDGENRE:
			return {
				...state,
				selectedGenre: action.payload,
				searchQuery: "",
				currentPage: 1,
			};
		case SELECTEDCATEGORY:
			return {
				...state,
				selectedCategory: action.payload,
				searchQuery: "",
				currentPage: 1,
				selectedGenre: { _id: "", name: "" },
			};
		default:
			return state;
	}
};

export default reducer;
