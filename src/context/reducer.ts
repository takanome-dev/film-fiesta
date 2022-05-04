import * as constants from "./constant";
import * as types from "./types";

const reducer = (state: types.InitialState, action: types.Action) => {
	switch (action.type) {
		case constants.SEARCH_QUERY:
			return {
				...state,
				searchQuery: action.payload,
				currentPage: 1,
				selectedGenre: { id: "", name: "" },
			};
		case constants.GET_CURRENT_USER:
			return {
				...state,
				user: action.payload,
			};
		case constants.FETCH_MOVIES:
			return {
				...state,
				movies: action.payload,
			};
		case constants.FETCH_GENRES:
			return {
				...state,
				genres: action.payload,
			};
		case constants.FETCH_FAVORITES:
			return {
				...state,
				favorites: action.payload,
			};
		case constants.FETCH_BOOKMARKS:
			return {
				...state,
				bookmarks: action.payload,
			};
		case constants.FETCH_RENTALS:
			return {
				...state,
				rentals: action.payload,
			};
		case constants.FETCH_FEEDBACKS:
			return {
				...state,
				feedbacks: action.payload,
			};
		case constants.CURRENT_PAGE:
			return {
				...state,
				page: action.payload,
			};
		case constants.TOTAL_PAGES:
			return {
				...state,
				totalPages: action.payload,
			};
		case constants.CURRENT_ROUTE:
			return {
				...state,
				currentRoute: action.payload,
			};
		case constants.SELECTED_GENRE:
			return {
				...state,
				selectedGenre: action.payload,
				searchQuery: "",
				currentPage: 1,
			};
		case constants.SELECTED_CATEGORY:
			return {
				...state,
				selectedCategory: action.payload,
				searchQuery: "",
				currentPage: 1,
				selectedGenre: { id: "", name: "" },
			};
		default:
			return state;
	}
};

export default reducer;
