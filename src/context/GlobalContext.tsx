import { createContext, useReducer } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
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
};

export const Context = createContext(initialState);

type Props = {
	children: React.ReactNode;
};

const Provider: React.FC<Props> = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

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

	const handleSelectedCategory = (category: string) => {
		console.log({ category });
		dispatch({
			type: SELECTEDCATEGORY,
			payload: category,
		});
	};

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

	const handleFilterMoviesByCategory = () => {
		const {
			movies: allMovies,
			pageSize,
			currentPage,
			selectedCategory,
		} = state;

		const filter = allMovies.filter(
			(m: MovieType) => m.category === selectedCategory
		);
		const filteredMoviesByCategory = paginate(filter, currentPage, pageSize);
		const totalMoviesFilteredByCategory = filter.length;
		return { filteredMoviesByCategory, totalMoviesFilteredByCategory };
	};

	const handleFilterMovies = () => {
		const {
			movies: allMovies,
			pageSize,
			currentPage,
			selectedGenre,
			searchQuery,
		} = state;

		let filtered: MovieType[] = allMovies;

		if (searchQuery)
			filtered = allMovies.filter((m: MovieType) =>
				m.title.toLowerCase().includes(searchQuery.toLowerCase())
			);
		else if (selectedGenre && selectedGenre._id)
			filtered = allMovies.filter((m: MovieType) =>
				m.genres.find((g) => g._id === selectedGenre._id)
			);

		const filteredMovies = paginate(filtered, currentPage, pageSize);
		const totalMoviesFiltered = filtered.length;
		return { filteredMovies, totalMoviesFiltered };
	};

	const { filteredMovies, totalMoviesFiltered } = handleFilterMovies();
	const { filteredMoviesByCategory, totalMoviesFilteredByCategory } =
		handleFilterMoviesByCategory();

	const value = {
		searchQuery: state.searchQuery,
		movies: state.movies,
		genres: state.genres,
		currentPage: state.currentPage,
		currentRoute: state.currentRoute,
		pageSize: state.pageSize,
		selectedGenre: state.selectedGenre,
		selectedCategory: state.selectedCategory,
		onSearch: handleSearch,
		onPageChange: handlePageChange,
		onRouteChange: handleRouteChange,
		onGenreSelected: handleSelectedGenre,
		onCategorySelected: handleSelectedCategory,
		onDelete: handleDeleteMovie,
		filteredMovies,
		totalMoviesFiltered,
		filteredMoviesByCategory,
		totalMoviesFilteredByCategory,
	};

	return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
