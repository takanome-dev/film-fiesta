import { FilteredGenre } from ".";
import CardList from "./CardList";
import Pagination from "./common/Pagination";
import Container from "./styles/Movies.styled";

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
