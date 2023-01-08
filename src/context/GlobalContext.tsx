import { getMovies } from "@/services/movie";
import { createContext, useReducer } from "react";
import { useHistory } from "react-router-dom";
// import { getGenres } from "../services/genre";
import * as constants from "./constant";
import reducer from "./reducer";
import { InitialState } from "./types";

const initialState: InitialState = {
	genres: [],
	searchQuery: "",
	feedbacks: [],
	page: 1,
	currentRoute: "/movies",
	selectedGenre: { id: "", name: "" },
};

export const Context = createContext(initialState);

type Props = {
	children: React.ReactNode;
};

const Provider: React.FC<Props> = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const history = useHistory();

	const handleSearch = (query: string) => {
		dispatch({
			type: constants.SEARCH_QUERY,
			payload: query,
		});
	};

	const handlePageChange = async (pageNumber: number) => {
		window.scrollTo({ top: 0, behavior: "smooth" });
		history.push({ pathname: "/movies", search: `page=${pageNumber}` });

		const res = await getMovies(pageNumber);

		dispatch({
			type: constants.CURRENT_PAGE,
			payload: pageNumber,
		});

		dispatch({
			type: constants.FETCH_MOVIES,
			payload: res.results,
		});
	};

	const handleRouteChange = (route: string) => {
		dispatch({
			type: constants.CURRENT_ROUTE,
			payload: route,
		});
	};

	// const handleSelectedGenre = (genre: GenreType) => {
	// 	dispatch({
	// 		type: constants.SELECTED_GENRE,
	// 		payload: genre,
	// 	});
	// };

	const value = {
		searchQuery: state.searchQuery,
		page: state.page,
		genres: state.genres,
		feedbacks: state.feedbacks,
		currentRoute: state.currentRoute,
		selectedGenre: state.selectedGenre,
		onSearch: handleSearch,
		onPageChange: handlePageChange,
		onRouteChange: handleRouteChange,
		dispatch,
	};

	return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
