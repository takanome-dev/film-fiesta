import { createContext, useEffect, useReducer } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { FeedbackType } from "../components/types";
import { getCurrentUser } from "../services/auth";
import { getBookmarks } from "../services/bookmark";
import { getFavorites } from "../services/favorite";
import { getFeedbacks } from "../services/feedback";
import { getGenres } from "../services/genre";
import { deleteMovie, getMovies } from "../services/movie";
import { getRentals } from "../services/rental";
import { GenreType } from "../types/GenreType";
import { MovieType } from "../types/MovieType";
import { paginate } from "../utils/paginate";
import * as constants from "./Constant";
import reducer from "./Reducer";
import { InitialStateType } from "./types";

const initialState: InitialStateType = {
	searchQuery: "",
	movies: [],
	genres: [],
	rentals: [],
	favorites: [],
	bookmarks: [],
	feedbacks: [],
	pageSize: 12,
	currentPage: 1,
	currentRoute: "/movies",
	selectedGenre: { _id: "", name: "" },
	selectedCategory: "",
	user: { _id: "", name: "", email: "", iat: 0, imageUrl: "", isAdmin: false },
};

export const Context = createContext(initialState);

type Props = {
	children: React.ReactNode;
};

const Provider: React.FC<Props> = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const location = useLocation();

	const { refetch: refetchMovies, isLoading: loadingMovies } = useQuery<
		MovieType[],
		Error
	>("getMovies", async () => await getMovies(), {
		onSuccess: (data) =>
			dispatch({
				type: constants.FETCH_MOVIES,
				payload: data,
			}),
	});

	useQuery<GenreType[], Error>("getGenres", async () => await getGenres(), {
		onSuccess: (data) => {
			const genres = [{ _id: "", name: "All" }, ...data];
			dispatch({
				type: constants.FETCH_GENRES,
				payload: genres,
			});
		},
	});

	const { refetch: refetchFavorites } = useQuery(
		"getFavorites",
		async () => await getFavorites(),
		{
			enabled: false,
			onSuccess: (data) => {
				const favArr = data.favorites.map((fav: { movieId: string }) =>
					state.movies.find((m: MovieType) => m._id === fav.movieId)
				);
				return dispatch({ type: constants.FETCH_FAVORITES, payload: favArr });
			},
		}
	);

	const { refetch: refetchBookmarks } = useQuery(
		"getBookmarks",
		async () => await getBookmarks(),
		{
			enabled: false,
			onSuccess: (data) => {
				const bookmarkArr = data.bookmarks.map((b: { movieId: string }) =>
					state.movies.find((m: MovieType) => m._id === b.movieId)
				);

				return dispatch({
					type: constants.FETCH_BOOKMARKS,
					payload: bookmarkArr,
				});
			},
		}
	);

	const { refetch: refetchRentals } = useQuery(
		"getRentals",
		async () => await getRentals(),
		{
			enabled: false,
			onSuccess: (data) => {
				const rentalArr = data.rentals.map((r: { movieId: string }) =>
					state.movies.find((m: MovieType) => m._id === r.movieId)
				);
				return dispatch({ type: constants.FETCH_RENTALS, payload: rentalArr });
			},
		}
	);

	const { refetch: refetchFeedbacks } = useQuery<FeedbackType[], Error>(
		"getFeedbacks",
		async () => await getFeedbacks(),
		{
			enabled: false,
			onSuccess: (data) =>
				dispatch({ type: constants.FETCH_FEEDBACKS, payload: data }),
		}
	);

	useEffect(() => {
		const user = getCurrentUser();
		dispatch({
			type: constants.GET_CURRENT_USER,
			payload: user,
		});

		if (user?._id) {
			refetchBookmarks();
			refetchFavorites();
		}
	}, []);

	const handleSearch = (query: string) => {
		dispatch({
			type: constants.SEARCH_QUERY,
			payload: query,
		});
	};

	const handlePageChange = (pageNumber: number) => {
		dispatch({
			type: constants.CURRENT_PAGE,
			payload: pageNumber,
		});
	};

	const handleRouteChange = (route: string) => {
		dispatch({
			type: constants.CURRENT_ROUTE,
			payload: route,
		});
	};

	const handleSelectedGenre = (genre: GenreType) => {
		dispatch({
			type: constants.SELECTED_GENRE,
			payload: genre,
		});
	};

	useEffect(() => {
		if (location.pathname === "/popular")
			dispatch({
				type: constants.SELECTED_CATEGORY,
				payload: "popular",
			});
		else if (location.pathname === "/trending")
			dispatch({
				type: constants.SELECTED_CATEGORY,
				payload: "trending",
			});
		else
			dispatch({
				type: constants.SELECTED_CATEGORY,
				payload: "",
			});
	}, [location.pathname]);

	const handleDeleteMovie = async (id: string) => {
		const originalMovies: MovieType[] = state.movies;
		const movies = originalMovies.filter((m) => m._id !== id);

		dispatch({
			type: constants.FETCH_MOVIES,
			payload: movies,
		});

		try {
			await deleteMovie(id);
		} catch (err: any) {
			if (err.request) {
				toast.error(err.data);
			}
			dispatch({
				type: constants.FETCH_MOVIES,
				payload: originalMovies,
			});
		}
	};

	const handleFilterMovies = () => {
		const {
			movies: allMovies,
			pageSize,
			currentPage,
			selectedGenre,
			selectedCategory,
		} = state;

		let filtered: MovieType[] = allMovies;

		if (selectedGenre && selectedGenre._id)
			filtered = allMovies.filter(
				(m: MovieType) => m.genre._id === selectedGenre._id
			);
		else if (selectedCategory)
			filtered = allMovies.filter(
				(m: MovieType) => m.category === selectedCategory
			);

		const filteredMovies = paginate(filtered, currentPage, pageSize);
		const totalMovies = filtered.length;
		return { filteredMovies, totalMovies };
	};

	const { filteredMovies, totalMovies } = handleFilterMovies();

	const value = {
		user: state.user,
		movies: state.movies,
		genres: state.genres,
		rentals: state.rentals,
		pageSize: state.pageSize,
		favorites: state.favorites,
		bookmarks: state.bookmarks,
		feedbacks: state.feedbacks,
		searchQuery: state.searchQuery,
		currentPage: state.currentPage,
		currentRoute: state.currentRoute,
		selectedGenre: state.selectedGenre,
		selectedCategory: state.selectedCategory,
		filteredMovies,
		totalMovies,
		loadingMovies,
		onSearch: handleSearch,
		onDelete: handleDeleteMovie,
		onPageChange: handlePageChange,
		onRouteChange: handleRouteChange,
		onGenreSelected: handleSelectedGenre,
		onRefetchMovies: refetchMovies,
		onRefetchFavorites: refetchFavorites,
		onRefetchBookmarks: refetchBookmarks,
		onRefetchRentals: refetchRentals,
		onRefetchFeedbacks: refetchFeedbacks,
		dispatch,
	};

	return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
