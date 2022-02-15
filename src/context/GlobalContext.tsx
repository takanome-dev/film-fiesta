import { createContext, useEffect, useReducer } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { getGenres } from "../services/genreService";
import { deleteMovie, getMovies } from "../services/movieService";
import { GenreType } from "../types/GenreType";
import { MovieType } from "../types/MovieType";
import { paginate } from "../utils/paginate";
import {
	CURRENTPAGE,
	FETCHGENRES,
	FETCHMOVIES,
	SEARCHQUERY,
	SELECTEDGENRE,
} from "./Constant";
import reducer from "./Reducer";
import { InitialStateType } from "./types";

const initialState: InitialStateType = {
	searchQuery: "",
	movies: [],
	genres: [],
	pageSize: 10,
	currentPage: 1,
	selectedGenre: { _id: "", name: "" },
};

export const Context = createContext(initialState);

type Props = {
	children: React.ReactNode;
};

const Provider: React.FC<Props> = ({ children }) => {
	const { refetch: handleGetMovies } = useQuery<MovieType[], Error>(
		"getMovies",
		async () => await getMovies(),
		{
			enabled: false,
			onSuccess: (data) =>
				dispatch({
					type: FETCHMOVIES,
					payload: data,
				}),
		}
	);
	const { refetch: handleGetGenres } = useQuery<GenreType[], Error>(
		"getGenres",
		async () => await getGenres(),
		{
			enabled: false,
			onSuccess: (data) => {
				const genres = [{ _id: "", name: "All" }, ...data];
				dispatch({
					type: FETCHGENRES,
					payload: genres,
				});
			},
		}
	);

	const [state, dispatch] = useReducer(reducer, initialState);

	// const handleGetGenres = async () => {
	// 	const data = await getGenres();
	// 	const genres = [{ _id: "", name: "All" }, ...data];

	// 	dispatch({
	// 		type: FETCHGENRES,
	// 		payload: genres,
	// 	});
	// };

	useEffect(() => {
		handleGetMovies();
		handleGetGenres();
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

	const handleSelectedGenre = (genre: GenreType) => {
		dispatch({
			type: SELECTEDGENRE,
			payload: genre,
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

	const handleFilterMovies = () => {
		const {
			movies: allMovies,
			pageSize,
			currentPage,
			selectedGenre,
			searchQuery,
		} = state;

		console.log({ allMovies });

		let filtered: MovieType[] = allMovies;

		if (searchQuery)
			filtered = allMovies.filter((m: MovieType) =>
				m.title.toLowerCase().includes(searchQuery.toLowerCase())
			);
		else if (selectedGenre && selectedGenre._id)
			filtered = allMovies.filter((m: MovieType) =>
				m.genres.find((g) => g._id === selectedGenre._id)
			);

		const movies = paginate(filtered, currentPage, pageSize);
		return { movies };
	};

	const { movies } = handleFilterMovies();

	const value = {
		searchQuery: state.searchQuery,
		genres: state.genres,
		currentPage: state.currentPage,
		pageSize: state.pageSize,
		selectedGenre: state.selectedGenre,
		onSearch: handleSearch,
		onPageChange: handlePageChange,
		onGenreSelected: handleSelectedGenre,
		onDelete: handleDeleteMovie,
		movies,
	};

	return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default Provider;
