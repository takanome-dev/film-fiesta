import { useContext } from "react";
import { CardList, FilteredGenre, Skeleton } from "../components";
import Pagination from "../components/common/Pagination";
import Container from "../components/styles/Movies.styled";
import { Context } from "../context/GlobalContext";

const Movies = () => {
	const { loadingMovies } = useContext(Context);

	return (
		<>
			{loadingMovies ? (
				<Skeleton />
			) : (
				<Container>
					<FilteredGenre />
					<CardList />
					<Pagination />
				</Container>
			)}
		</>
	);
};

export default Movies;
