import useMovies from "@/hooks/useMovies";
import { CardList, Skeleton } from "../components";
import Pagination from "../components/common/Pagination";
import Container from "../components/styles/Movies.styled";

const Movies = () => {
		const {movies, loadingMovies, totalPages} = useMovies(1)
// TODO: update this
		const page = 1
		const handlePageChange = async (pageNumber: number) => {
			console.log({pageNumber})
			// window.scrollTo({ top: 0, behavior: "smooth" });
			// history.push({ pathname: "/movies", search: `page=${pageNumber}` });
	
			// const res = await getMovies(pageNumber);
	
			// dispatch({
			// 	type: constants.CURRENT_PAGE,
			// 	payload: pageNumber,
			// });
	
			// dispatch({
			// 	type: constants.FETCH_MOVIES,
			// 	payload: res.results,
			// });
		};

	return (
		<>
			{loadingMovies ? (
				<Skeleton />
			) : (
				<Container>
					{/* <FilteredGenre /> */}
					<CardList movies={movies} />
					<Pagination
						onPageChange={handlePageChange}
						page={page}
						totalPages={totalPages}
					/>
				</Container>
			)}
		</>
	);
};

export default Movies;
