import { CardList, FilteredGenre } from "../components";
import Pagination from "../components/common/Pagination";
import Container from "../components/styles/Movies.styled";

const Movies = () => {
	return (
		<Container>
			<FilteredGenre />
			<CardList />
			<Pagination />
		</Container>
	);
};

export default Movies;
