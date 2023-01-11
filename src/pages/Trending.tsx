import { CardList } from "../components";
import Pagination from "../components/common/Pagination";
import Container from "../components/styles/Movies.styled";
import useQuery from "../hooks/useQuery";
import {getTrendingMovies} from "../services/movie";

const Trending = () => {
	// TODO: use useTrendingMovies hook
	const { totalPages, movies, page, handlePageChange } = useQuery(
		"trending",
		getTrendingMovies
	);

	const [currentPage, setCurrentPage] = useState(1);
	const {movies, loadingMovies, totalPages, errMovies} = useMovies(currentPage)

	const history = useHistory();

	const handlePageChange = async (pageNumber: number) => {
		setCurrentPage(pageNumber);
		window.scrollTo({ top: 0, behavior: "smooth" });
		history.push({ pathname: "/movies", search: `page=${pageNumber}` });
	};

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
