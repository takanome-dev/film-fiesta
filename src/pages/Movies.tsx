import useMovies from "@/hooks/useMovies";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { CardList, Skeleton } from "../components";
import Pagination from "../components/common/Pagination";
import Container from "../components/styles/Movies.styled";

const Movies = () => {
	const [currentPage, setCurrentPage] = useState(1);
		const {movies, loadingMovies, totalPages, errMovies} = useMovies(currentPage)

		const history = useHistory();

		const handlePageChange = async (pageNumber: number) => {
			setCurrentPage(pageNumber);
			window.scrollTo({ top: 0, behavior: "smooth" });
			history.push({ pathname: "/movies", search: `page=${pageNumber}` });
		};

		if (errMovies) {
			console.log(errMovies);
			return <h1>Something went wrong</h1>;
		}

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
						page={currentPage}
						totalPages={totalPages}
					/>
				</Container>
			)}
		</>
	);
};

export default Movies;
