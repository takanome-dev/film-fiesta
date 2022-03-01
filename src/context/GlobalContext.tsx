import { createContext, useEffect, useReducer } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { getCurrentUser } from "../services/auth";
import { getGenres } from "../services/genre";
import { deleteMovie, getMovies } from "../services/movie";
import { GenreType } from "../types/GenreType";
import { MovieType } from "../types/MovieType";
import { paginate } from "../utils/paginate";
import {
	CURRENT_PAGE,
	CURRENT_ROUTE,
	FETCH_GENRES,
	FETCH_MOVIES,
	GET_CURRENT_USER,
	SEARCH_QUERY,
	SELECTED_CATEGORY,
	SELECTED_GENRE
} from "./Constant";
import reducer from "./Reducer";
import { InitialStateType } from "./types";

const initialState: InitialStateType = {
	searchQuery: "",
	movies: [],
	genres: [],
	pageSize: 9,
	currentPage: 1,
	currentRoute: "/movies",
	selectedGenre: { _id: "", name: "" },
	selectedCategory: "",
	user: { _id: "", name: "", email: "", iat: 0, imageUrl: "" },
	like: false,
	bookmark: false,
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

	useEffect(() => {
		const user = getCurrentUser();
		dispatch({
			type: GET_CURRENT_USER,
			payload: user,
		});
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

	// const handleLikeMovie = (isLike: boolean) => {
	// 	// if(isLike) {}
	// 	dispatch({
	// 		type: LIKEMOVIE,
	// 		payload: isLike,
	// 	});
	// };

	// const handleBookmarkMovie = (isBookmark: boolean) => {
	// 	dispatch({
	// 		type: BOOKMARKMOVIE,
	// 		payload: isBookmark,
	// 	});
	// };

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
		user: state.user,
		pageSize: state.pageSize,
		like: state.like,
		bookmark: state.bookmark,
		searchQuery: state.searchQuery,
		currentPage: state.currentPage,
		currentRoute: state.currentRoute,
		selectedGenre: state.selectedGenre,
		selectedCategory: state.selectedCategory,
		filteredMovies,
		totalMovies,
		onSearch: handleSearch,
		// onLike: handleLikeMovie,
		onDelete: handleDeleteMovie,
		onPageChange: handlePageChange,
		// onBookmark: handleBookmarkMovie,
		onRouteChange: handleRouteChange,
		onGenreSelected: handleSelectedGenre,
		onRefetchMovie: refetchMovies,
	};

	return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
