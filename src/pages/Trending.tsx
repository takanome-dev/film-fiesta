import { CardList } from "../components";
import Pagination from "../components/common/Pagination";
import Container from "../components/styles/Movies.styled";
import useQuery from "../hooks/useQuery";
import {getTrendingMovies} from "../services/movie";

const Trending = () => {
	const { totalPages, movies, page, handlePageChange } = useQuery(
		"trending",
		getTrendingMovies
	);

	return (
		<Container>
			<CardList movies={movies} />
			<Pagination
				onPageChange={handlePageChange}
				page={+page}
				totalPages={totalPages}
			/>
		</Container>
	);
};

export default Trending;
