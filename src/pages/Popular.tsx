import { CardList } from "../components";
import Pagination from "../components/common/Pagination";
import Container from "../components/styles/Movies.styled";
import useQuery from "../hooks/useQuery";
import {getPopularMovies} from "../services/movie";

const Popular = () => {
	const { totalPages, movies, page, handlePageChange } = useQuery(
		"popular",
		getPopularMovies
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
export default Popular;
