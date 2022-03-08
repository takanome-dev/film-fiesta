import { createContext, useEffect, useReducer } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { getCurrentUser } from "../services/auth";
import { getBookmarks } from "../services/bookmark";
import { getFavorites } from "../services/favorite";
import { getGenres } from "../services/genre";
import { deleteMovie, getMovies } from "../services/movie";
import { getRentals } from "../services/rental";
import { BookmarkType } from "../types/BookmarkType";
import { FavoriteType } from "../types/FavoriteType";
import { GenreType } from "../types/GenreType";
import { MovieType } from "../types/MovieType";
import { RentalType } from "../types/RentalType";
import { paginate } from "../utils/paginate";
import {
	CURRENT_PAGE,
	CURRENT_ROUTE,
	FETCH_BOOKMARKS,
	FETCH_FAVORITES,
	FETCH_GENRES,
	FETCH_MOVIES,
	FETCH_RENTALS,
	GET_CURRENT_USER,
	SEARCH_QUERY,
	SELECTED_CATEGORY,
	SELECTED_GENRE,
} from "./Constant";
import reducer from "./Reducer";
import { InitialStateType } from "./types";

const initialState: InitialStateType = {
	searchQuery: "",
	movies: [],
	genres: [],
	favorites: [],
	bookmarks: [],
	rentals: [],
	pageSize: 9,
	currentPage: 1,
	currentRoute: "/movies",
	selectedGenre: { _id: "", name: "" },
	selectedCategory: "",
	user: { _id: "", name: "", email: "", iat: 0, imageUrl: "" },
};

export const Context = createContext(initialState);

type Props = {
	children: React.ReactNode;
};

const Provider: React.FC<Props> = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const location = useLocation();

	const { refetch: refetchMovies } = useQuery<MovieType[], Error>(
		"getMovies",
		async () => await getMovies(),
		{
			onSuccess: (data) =>
				dispatch({
					type: FETCH_MOVIES,
					payload: data,
				}),
		}
	);

	useQuery<GenreType[], Error>("getGenres", async () => await getGenres(), {
		onSuccess: (data) => {
			const genres = [{ _id: "", name: "All" }, ...data];
			dispatch({
				type: FETCH_GENRES,
				payload: genres,
			});
		},
	});

	const { refetch: refetchFavorites } = useQuery<FavoriteType[], Error>(
		"getFavorites",
		async () => await getFavorites(),
		{
			enabled: false,
			onSuccess: (data) => dispatch({ type: FETCH_FAVORITES, payload: data }),
		}
	);

	const { refetch: refetchBookmarks } = useQuery<BookmarkType[], Error>(
		"getBookmarks",
		async () => await getBookmarks(),
		{
			enabled: false,
			onSuccess: (data) => dispatch({ type: FETCH_BOOKMARKS, payload: data }),
		}
	);

	const { refetch: refetchRentals } = useQuery<RentalType[], Error>(
		"getRentals",
		async () => await getRentals(),
		{
			enabled: false,
			onSuccess: (data) => dispatch({ type: FETCH_RENTALS, payload: data }),
		}
	);

	useEffect(() => {
		const user = getCurrentUser();
		dispatch({
			type: GET_CURRENT_USER,
			payload: user,
		});
		if (user?._id) {
			refetchBookmarks();
			refetchFavorites();
			refetchRentals();
		}
	}, []);

	const handleSearch = (query: string) => {
		dispatch({
			type: SEARCH_QUERY,
			payload: query,
		});
	};

	const handlePageChange = (pageNumber: number) => {
		dispatch({
			type: CURRENT_PAGE,
			payload: pageNumber,
		});
	};

	const handleRouteChange = (route: string) => {
		dispatch({
			type: CURRENT_ROUTE,
			payload: route,
		});
	};

	const handleSelectedGenre = (genre: GenreType) => {
		dispatch({
			type: SELECTED_GENRE,
			payload: genre,
		});
	};

	useEffect(() => {
		if (location.pathname === "/popular")
			dispatch({
				type: SELECTED_CATEGORY,
				payload: "popular",
			});
		else if (location.pathname === "/trending")
			dispatch({
				type: SELECTED_CATEGORY,
				payload: "trending",
			});
		else
			dispatch({
				type: SELECTED_CATEGORY,
				payload: "",
			});
	}, [location.pathname]);

	const handleDeleteMovie = async (id: string) => {
		const originalMovies: MovieType[] = state.movies;
		const movies = originalMovies.filter((m) => m._id !== id);

		dispatch({
			type: FETCH_MOVIES,
			payload: movies,
		});

		try {
			await deleteMovie(id);
		} catch (err: any) {
			if (err.request) {
				toast.error(err.data);
			}
			dispatch({
				type: FETCH_MOVIES,
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
			searchQuery,
			selectedCategory,
		} = state;

		let filtered: MovieType[] = allMovies;

		if (searchQuery)
			filtered = allMovies.filter((m: MovieType) =>
				m.title.toLowerCase().includes(searchQuery.toLowerCase())
			);
		else if (selectedGenre && selectedGenre._id)
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
		movies: state.movies,
		genres: state.genres,
		favorites: state.favorites,
		bookmarks: state.bookmarks,
		rentals: state.rentals,
		user: state.user,
		pageSize: state.pageSize,
		searchQuery: state.searchQuery,
		currentPage: state.currentPage,
		currentRoute: state.currentRoute,
		selectedGenre: state.selectedGenre,
		selectedCategory: state.selectedCategory,
		filteredMovies,
		totalMovies,
		onSearch: handleSearch,
		onDelete: handleDeleteMovie,
		onPageChange: handlePageChange,
		onRouteChange: handleRouteChange,
		onGenreSelected: handleSelectedGenre,
		onRefetchMovies: refetchMovies,
		onRefetchFavorites: refetchFavorites,
		onRefetchBookmarks: refetchBookmarks,
		onRefetchRentals: refetchRentals,
	};

	return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
