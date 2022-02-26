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
	CURRENTPAGE,
	CURRENTROUTE,
	FETCHGENRES,
	FETCHMOVIES,
	GETCURRENTUSER,
	SEARCHQUERY,
	SELECTEDCATEGORY,
	SELECTEDGENRE,
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
};

export const Context = createContext(initialState);

type Props = {
	children: React.ReactNode;
};

const Provider: React.FC<Props> = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const location = useLocation();

	useQuery<MovieType[], Error>("getMovies", async () => await getMovies(), {
		onSuccess: (data) =>
			dispatch({
				type: FETCHMOVIES,
				payload: data,
			}),
	});

	useQuery<GenreType[], Error>("getGenres", async () => await getGenres(), {
		onSuccess: (data) => {
			const genres = [{ _id: "", name: "All" }, ...data];
			dispatch({
				type: FETCHGENRES,
				payload: genres,
			});
		},
	});

	useEffect(() => {
		const user = getCurrentUser();
		dispatch({
			type: GETCURRENTUSER,
			payload: user,
		});
	}, []);

	const handleSearch = (query: string) => {
		dispatch({
			type: SEARCHQUERY,
			payload: query,
		});
	};

	const handlePageChange = (pageNumber: number) => {
		dispatch({
			type: CURRENTPAGE,
			payload: pageNumber,
		});
	};

	const handleRouteChange = (route: string) => {
		dispatch({
			type: CURRENTROUTE,
			payload: route,
		});
	};

	const handleSelectedGenre = (genre: GenreType) => {
		dispatch({
			type: SELECTEDGENRE,
			payload: genre,
		});
	};

	useEffect(() => {
		if (location.pathname === "/popular")
			dispatch({
				type: SELECTEDCATEGORY,
				payload: "popular",
			});
		else if (location.pathname === "/trending")
			dispatch({
				type: SELECTEDCATEGORY,
				payload: "trending",
			});
		else
			dispatch({
				type: SELECTEDCATEGORY,
				payload: "",
			});
	}, [location.pathname]);

	// handleLikeMovie = (movie: MovieType) => {
	// 	const movies = [...this.state.movies];
	// 	const index = movies.indexOf(movie);
	// 	movies[index] = { ...movies[index] };
	// 	movies[index].liked = !movies[index].liked;
	// 	this.setState({ movies });
	// };

	// handleSortMovie = (sortColumn: SortColumnType) =>
	// this.setState({ sortColumn });

	const handleDeleteMovie = async (id: string) => {
		const originalMovies: MovieType[] = state.movies;
		const movies = originalMovies.filter((m) => m._id !== id);

		dispatch({
			type: FETCHMOVIES,
			payload: movies,
		});

		try {
			await deleteMovie(id);
		} catch (err: any) {
			if (err.request) {
				toast.error(err.data);
			}
			dispatch({
				type: FETCHMOVIES,
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
	};

	return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
