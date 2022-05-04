import { createContext, useEffect, useReducer } from "react";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { getCurrentUser } from "../services/auth";
// import { getGenres } from "../services/genre";
import movieApi from "../services/movie";
import * as types from "../types";
import * as constants from "./constant";
import reducer from "./reducer";
import { InitialState } from "./types";

const initialState: InitialState = {
	searchQuery: "",
	movies: [],
	genres: [],
	// favorites: [],
	feedbacks: [],
	page: 1,
	currentRoute: "/movies",
	totalPages: 0,
	selectedGenre: { id: "", name: "" },
	// selectedCategory: "",
	user: { _id: "", name: "", email: "", iat: 0, imageUrl: "", isAdmin: false },
};

export const Context = createContext(initialState);

type Props = {
	children: React.ReactNode;
};

const Provider: React.FC<Props> = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const history = useHistory();

	const { refetch: refetchMovies, isLoading: loadingMovies } = useQuery<
		types.MoviesResponse,
		Error
	>("getMovies", async () => await movieApi.getMovies(state.page), {
		onSuccess: (data) => {
			dispatch({
				type: constants.FETCH_MOVIES,
				payload: data.results,
			});

			dispatch({
				type: constants.TOTAL_PAGES,
				payload: data.total_pages,
			});
		},
		onError: (error) => {
			console.log({ error });
			toast.error(error.message);
		},
	});

	// useQuery<types.GenresResponse, Error>(
	// 	"getGenres",
	// 	async () => await getGenres(),
	// 	{
	// 		onSuccess: (data) => {
	// 			const genres = [{ id: "", name: "All" }, ...data.genres];
	// 			dispatch({
	// 				type: constants.FETCH_GENRES,
	// 				payload: genres,
	// 			});
	// 		},
	// 	}
	// );

	// const { refetch: refetchFeedbacks } = useQuery<FeedbackType[], Error>(
	// 	"getFeedbacks",
	// 	async () => await getFeedbacks(),
	// 	{
	// 		enabled: false,
	// 		onSuccess: (data) =>
	// 			dispatch({ type: constants.FETCH_FEEDBACKS, payload: data }),
	// 	}
	// );

	useEffect(() => {
		const user = getCurrentUser();
		dispatch({
			type: constants.GET_CURRENT_USER,
			payload: user,
		});
		/* // eslint-disable-next-line react-hooks/exhaustive-deps */
	}, []);

	const handleSearch = (query: string) => {
		dispatch({
			type: constants.SEARCH_QUERY,
			payload: query,
		});
	};

	const handlePageChange = async (pageNumber: number) => {
		window.scrollTo({ top: 0, behavior: "smooth" });
		history.push({ pathname: "/movies", search: `page=${pageNumber}` });

		const res = await movieApi.getMovies(pageNumber);

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
		user: state.user,
		movies: state.movies,
		genres: state.genres,
		feedbacks: state.feedbacks,
		searchQuery: state.searchQuery,
		page: state.page,
		currentRoute: state.currentRoute,
		selectedGenre: state.selectedGenre,
		// selectedCategory: state.selectedCategory,
		totalPages: state.totalPages,
		loadingMovies,
		onSearch: handleSearch,
		onPageChange: handlePageChange,
		onRouteChange: handleRouteChange,
		// onGenreSelected: handleSelectedGenre,
		onRefetchMovies: refetchMovies,
		dispatch,
	};

	return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
