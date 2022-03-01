import {
	CURRENT_PAGE,
	CURRENT_ROUTE,
	FETCH_FAVORITES,
	FETCH_GENRES,
	FETCH_MOVIES,
	GET_CURRENT_USER,
	SEARCH_QUERY,
	SELECTED_CATEGORY,
	SELECTED_GENRE,
} from "./Constant";
import { ActionType, InitialStateType } from "./types";

const reducer = (state: InitialStateType, action: ActionType) => {
	switch (action.type) {
		case SEARCH_QUERY:
			return {
				...state,
				searchQuery: action.payload,
				currenPage: 1,
				selectedGenre: { _id: "", name: "" },
			};
		case GET_CURRENT_USER:
			return {
				...state,
				user: action.payload,
			};
		case FETCH_MOVIES:
			return {
				...state,
				movies: action.payload,
			};
		case FETCH_GENRES:
			return {
				...state,
				genres: action.payload,
			};
		case FETCH_FAVORITES:
			return {
				...state,
				favorites: action.payload,
			};
		case CURRENT_PAGE:
			return {
				...state,
				currentPage: action.payload,
			};
		case CURRENT_ROUTE:
			return {
				...state,
				currentRoute: action.payload,
			};
		case SELECTED_GENRE:
			return {
				...state,
				selectedGenre: action.payload,
				searchQuery: "",
				currentPage: 1,
			};
		case SELECTED_CATEGORY:
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
