import { Component } from "react";
//* Types
import { MovieType } from "../types/MovieType";
import { MoviesTableType } from "./types";
//* Components
import Like from "./common/Like";
import Table from "./common/Table";
import { Link } from "react-router-dom";

export default class MoviesTable extends Component<MoviesTableType> {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (movie: MovieType) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      content: (movie: MovieType) => (
        <Like
          liked={movie.liked!}
          onLike={() => this.props.handleLike(movie)}
        />
      ),
    },
    {
      content: (movie: MovieType) => (
        <button
          onClick={() => this.props.handleDelete(movie._id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { movies, handleSort, sortColumn } = this.props;

    return (
      <Table
        data={movies}
        handleSort={handleSort}
        sortColumn={sortColumn}
        columns={this.columns}
      />
    );
  }
}
