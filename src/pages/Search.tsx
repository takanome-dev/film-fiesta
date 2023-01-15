/* eslint-disable @typescript-eslint/no-non-null-assertion */
import useSearchQuery from "@/hooks/useSearchQuery";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { CardList, Skeleton } from "../components";
import Pagination from "../components/common/Pagination";
import SearchInput from "../components/common/SearchInput";
import Container from "../components/styles/Search.styled";

const Search = () => {
	const [currentPage, setCurrentPage] = useState(1);

	const {movies, error, loading, totalPages, newPage, totalResults, query} = useSearchQuery(currentPage)
// console.log({error, loading, totalPages, currentPage})
	const history = useHistory();

	const handlePageChange = async (pageNumber: number) => {
		setCurrentPage(pageNumber);
		window.scrollTo({ top: 0, behavior: "smooth" });
		history.push({ pathname: "/search", search: `page=${pageNumber}` });
	};

	if (loading) return <Skeleton />;

	if (error) {
		console.log(error);
		return <h1>Something went wrong</h1>;
	}

	return (
		<Container>
			{newPage ? (
				<>
					<p className="title">Find your favorite movie 🎥</p>
					<div className="input-container">
						<SearchInput />
					</div>
				</>
			) : (
				<>
					<p className="title">
						Search result for &quot;{query}&quot; ({totalResults}{" "}
						{totalResults < 1 ? "result" : "results"} found)
					</p>
					<div className="search-results">
						<CardList movies={movies} />
						<Pagination
							page={currentPage}
							onPageChange={handlePageChange}
							totalPages={totalPages}
						/>
					</div>
				</>
			)}
		</Container>
	);
};

export default Search;
