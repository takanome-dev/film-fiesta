import React from "react";
import _ from "lodash";
import { Component } from "react";
import { Link } from "react-router-dom";
// import { AxiosError } from "axios";
//* Components
import Search from "./common/Search";
import MoviesTable from "./MoviesTable";
import ListGroup from "./common/ListGroup";
import Pagination from "./common/Pagination";
//* Services
import { paginate } from "../utils/paginate";
// import { getGenres } from "../services/fakeGenreService";
// import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/genreService";
//* Types
import { GenreType } from "../types/GenreType";
import { MovieType } from "../types/MovieType";
import { SortColumnType, StateType } from "./types";
import { deleteMovie, getMovies } from "../services/movieService";
import { toast } from "react-toastify";
// import HttpException from "../services/httpException";
import { logger } from "../services/logger";
import axios, { AxiosError } from "axios";

export default class Movies extends Component<unknown, StateType> {
  //* Initial State
  state: StateType = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: { _id: "", name: "" },
    searchQuery: "",
    sortColumn: { path: "title", order: "asc" },
  };

  async componentDidMount() {
    const data = await getGenres();
    const movies = await getMovies();
    const genres = [{ _id: "", name: "All Genres" }, ...data!];
    this.setState({ movies, genres });
  }

  handleLikeMovie = (movie: MovieType) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleDeleteMovie = async (id: string) => {
    const originalMovies = this.state.movies;
    const updatedMovies = originalMovies.filter((m) => m._id !== id);
    this.setState({ movies: updatedMovies });

    try {
      await deleteMovie(id);
    } catch (err: any | AxiosError) {
      console.log({ err });
      if (axios.isAxiosError(err) && err.response?.status === 404) {
        logger.log(err);
        console.log("axioserror", err);
        return toast.error(err.response.data);
        // toast.error(err.data);
      } else {
        this.setState({ movies: originalMovies });
      }
    }
  };

  handlePageChange = (page: number) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre: GenreType) => {
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleSearch = (query: string) => {
    this.setState({
      searchQuery: query,
      selectedGenre: { _id: "", name: "" },
      currentPage: 1,
    });
  };

  handleSortMovie = (sortColumn: SortColumnType) => {
    this.setState({ sortColumn });
  };

  handleGetData = () => {
    const {
      movies: allMovies,
      pageSize,
      currentPage,
      selectedGenre,
      sortColumn,
      searchQuery,
    } = this.state;

    let filtered = allMovies;

    if (searchQuery)
      filtered = allMovies.filter((m) =>
        m.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filtered = allMovies.filter((m) => m.genre._id === selectedGenre._id);

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);
    return { totalCount: filtered.length, movies };
  };

  render() {
    const { pageSize, currentPage, genres, selectedGenre, searchQuery } =
      this.state;
    const { totalCount, movies } = this.handleGetData();

    if (this.state.movies.length === 0)
      return <p>There are no movies in the database</p>;

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genres}
            selectedItem={selectedGenre}
            onItemSelected={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <Link to="/movies/new" className="btn btn-primary mb-3">
            New Movie
          </Link>
          <Search value={searchQuery} onSearch={this.handleSearch} />
          <p>Showing {totalCount} movies in the database</p>
          <MoviesTable
            movies={movies}
            sortColumn={this.state.sortColumn}
            handleDelete={this.handleDeleteMovie}
            handleLike={this.handleLikeMovie}
            handleSort={this.handleSortMovie}
          />
          <Pagination
            pageSize={pageSize}
            itemsCount={totalCount}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}
