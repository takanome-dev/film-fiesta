import { FilteredGenre } from ".";
import CardList from "./CardList";
import Pagination from "./common/Pagination";

const Movies = () => {
	return (
		<>
			<FilteredGenre />
			<CardList />
			<Pagination />
		</>
	);
};

export default Movies;
