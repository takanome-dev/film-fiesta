import { Component } from "react";
import { getGenres } from "../services/fakeGenreService";
import { getMovies } from "../services/fakeMovieService";
import { GenreType, MoviesType } from "../services/types";
import { paginate } from "../utils/paginate";
import ListGroup from "./ListGroup";
import MoviesTable from "./MoviesTable";
import Pagination from "./Pagination";

interface IState {
  movies: MoviesType[];
  genres: GenreType[];
  pageSize: number;
  currentPage: number;
}

export default class Movies extends Component<{}, IState> {
  state: Readonly<IState> = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
  };

  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }

  handleDelete = (id: string) => {
    const movies = this.state.movies.filter((m) => m._id !== id);

    this.setState({ movies });
  };

  handlePageChange = (page: number) => {
    this.setState({ currentPage: page });
  };

  handleGenreChange = (item: GenreType) => {
    console.log(item);
  };

  render() {
    const { movies: allMovies, pageSize, currentPage, genres } = this.state;

    const movies = paginate(allMovies, currentPage, pageSize);

    const { length: count } = this.state.movies;

    if (count === 0) return <p>There are no movies in the database</p>;

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup items={genres} onItemSelected={this.handleGenreChange} />
        </div>
        <div className="col">
          <p>Showing {count} movies in the database</p>
          <MoviesTable movies={movies} onDelete={this.handleDelete} />
          <Pagination
            pageSize={pageSize}
            itemsCount={count}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}
