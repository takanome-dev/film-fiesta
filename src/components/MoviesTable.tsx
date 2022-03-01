import { Component } from "react";
import { Link } from "react-router-dom";
// import { getCurrentUser } from "../services/auth";
import { MovieType } from "../types/MovieType";
// import Like from "./common/Like";
import Table from "./common/Table";
import { MoviesTableType } from "./types";

export default class MoviesTable extends Component<MoviesTableType> {
	columns = [
		{
			path: "title",
			label: "Title",
			content: (movie: MovieType) => (
				<Link to={`/movies/${movie._id}`}>{movie.title}</Link>
			),
		},
		{
			path: `genres[0].name`,
			label: "Genre",
		},
		{ path: "numberInStock", label: "Stock" },
		{ path: "dailyRentalRate", label: "Rate" },
		// {
		// 	content: (movie: MovieType) => (
		// 		<Like
		// 			liked={movie.liked!}
		// 			onLike={() => this.props.handleLike(movie)}
		// 		/>
		// 	),
		// },
	];

	deleteColumn = {
		content: (movie: MovieType) => (
			<button
				onClick={() => this.props.handleDelete(movie._id)}
				className="btn btn-danger btn-sm"
			>
				Delete
			</button>
		),
	};

	// constructor(props: any) {
	// 	super(props);
	// 	const user = getCurrentUser();
	// 	if (user && user.isAdmin) this.columns.push(this.deleteColumn);
	// }

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
