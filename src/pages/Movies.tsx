import { useContext } from "react";
import { CardList, Skeleton } from "../components";
import Pagination from "../components/common/Pagination";
import Container from "../components/styles/Movies.styled";
import { Context } from "../context/GlobalContext";

const Movies = () => {
	const { loadingMovies, movies, page, totalPages, onPageChange } =
		useContext(Context);

	return (
		<>
			{loadingMovies ? (
				<Skeleton />
			) : (
				<Container>
					{/* <FilteredGenre /> */}
					<CardList movies={movies} />
					<Pagination
						onPageChange={onPageChange}
						page={page}
						totalPages={totalPages}
					/>
				</Container>
			)}
		</>
	);
};

export default Movies;
