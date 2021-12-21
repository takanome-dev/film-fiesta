import { Component } from "react";
import _ from "lodash";
//* Services
import { getGenres } from "../services/fakeGenreService";
import { getMovies } from "../services/fakeMovieService";
import { paginate } from "../utils/paginate";
//* Types
import { GenreType } from "../types/GenreType";
import { MovieType } from "../types/MovieType";
import { SortColumnType, StateType } from "./types";
//* Components
import ListGroup from "./common/ListGroup";
import Pagination from "./common/Pagination";
import MoviesTable from "./MoviesTable";
export default class Movies extends Component<{}, StateType> {
  state: Readonly<StateType> = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: { _id: "", name: "" },
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleLikeMovie = (movie: MovieType) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);

    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;

    this.setState({ movies });
  };

  handleDeleteMovie = (id: string) => {
    const movies = this.state.movies.filter((m) => m._id !== id);

    // deepcode ignore ReactNextState: <please specify a reason of ignoring this>
    this.setState({ movies });
  };

  handlePageChange = (page: number) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre: GenreType) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSortMovie = (sortColumn: SortColumnType) => {
    this.setState({ sortColumn });
  };

  render() {
    const {
      movies: allMovies,
      pageSize,
      currentPage,
      genres,
      selectedGenre,
      sortColumn,
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    const { length: count } = this.state.movies;

    if (count === 0) return <p>There are no movies in the database</p>;

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
          <p>Showing {filtered.length} movies in the database</p>
          <MoviesTable
            movies={movies}
            sortColumn={this.state.sortColumn}
            handleDelete={this.handleDeleteMovie}
            handleLike={this.handleLikeMovie}
            handleSort={this.handleSortMovie}
          />
          <Pagination
            pageSize={pageSize}
            itemsCount={filtered.length}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}
