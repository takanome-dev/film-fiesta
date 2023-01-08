/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { CardList } from "../components";
import Pagination from "../components/common/Pagination";
import SearchInput from "../components/common/SearchInput";
import Container from "../components/styles/Search.styled";
import useQuery from "../hooks/useQuery";
import {getMoviesByQuery} from "../services/movie";

const Search = () => {
	const {
		newPage,
		query,
		totalPages,
		totalResults,
		movies,
		page,
		handlePageChange,
	} = useQuery("search", getMoviesByQuery);

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
							page={+page!}
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
