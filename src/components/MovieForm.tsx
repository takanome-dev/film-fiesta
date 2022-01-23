import Joi from "joi";
import Form from "./common/Form";
import { MovieType } from "../types/MovieType";
import { getGenres } from "../services/genreService";
import { getMovie, saveMovie } from "../services/movieService";

export default class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: 0,
      dailyRentalRate: 0,
    },
    genres: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().trim().min(5).max(50).required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number In Stock"),
    dailyRentalRate: Joi.number().required().min(0).max(10).label("Rate"),
  };

  async componentDidMount() {
    const genres = await getGenres();
    this.setState({ genres });

    const movieId = this.props.match.params.id;
    if (movieId === "new") return;

    const movie = await getMovie(movieId);
    if (!movie) return this.props.history.replace("/not-found");

    this.setState({ data: this.movieData(movie) });
  }

  movieData(movie: MovieType) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }

  async submitToServer() {
    await saveMovie(this.state.data);
    this.props.history.push("/movies");
  }

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Number In Stock")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}
