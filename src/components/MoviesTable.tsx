import Like from "./common/Like";
import { MoviesTableType } from "./types";

const MoviesTable: React.FC<MoviesTableType> = ({
  movies,
  handleDelete,
  handleLike,
  handleSort,
  sortColumn,
}) => {
  const sortMovie = (path: string) => {
    const sortMovieColumn = { ...sortColumn };

    if (sortMovieColumn.path === path) {
      sortMovieColumn.order = sortMovieColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortMovieColumn.path = path;
      sortMovieColumn.order = "asc";
    }

    return handleSort(sortMovieColumn);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => sortMovie("title")}>Title</th>
          <th onClick={() => sortMovie("genre.name")}>Genre</th>
          <th onClick={() => sortMovie("numberInStock")}>Stock</th>
          <th onClick={() => sortMovie("dailyRentalRate")}>Rate</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like liked={movie.liked!} onLike={() => handleLike(movie)} />
            </td>
            <td>
              <button
                onClick={() => handleDelete(movie._id)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
