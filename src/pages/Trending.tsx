import useTrendingMovies from "@/hooks/useTrendingMovies";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { CardList, Skeleton } from "@/components";
import Pagination from "@/components/common/Pagination";
import Container from "@/components/styles/Movies.styled";

const Trending = () => {
	const [currentPage, setCurrentPage] = useState(1);

	const {movies, error, loading, totalPages} = useTrendingMovies(currentPage)
// console.log({error, loading, totalPages, currentPage})
	const history = useHistory();

	const handlePageChange = async (pageNumber: number) => {
		setCurrentPage(pageNumber);
		window.scrollTo({ top: 0, behavior: "smooth" });
		history.push({ pathname: "/movies", search: `page=${pageNumber}` });
	};

	if (loading) return <Skeleton />;

	if (error) {
		console.log(error);
		return <h1>Something went wrong</h1>;
	}

	return (
		<Container>
			<CardList movies={movies} />
			<Pagination
				onPageChange={handlePageChange}
				page={currentPage}
				totalPages={totalPages}
			/>
		</Container>
	);
};

export default Trending;
