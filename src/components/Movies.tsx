/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useContext } from "react";
import { FilteredGenre } from ".";
import { Context } from "../context/GlobalContext";
import CardList from "./CardList";
import Pagination from "./common/Pagination";
import Container from "./styles/Movies.styled";

const Movies = () => {
	const { filteredMovies, totalMoviesFiltered } = useContext(Context);

	return (
		<Container>
			<FilteredGenre />
			<CardList movies={filteredMovies!} />
			<Pagination totalMovies={totalMoviesFiltered!} />
		</Container>
	);
};

export default Movies;
