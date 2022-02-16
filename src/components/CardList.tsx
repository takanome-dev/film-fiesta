import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/GlobalContext";
import Card from "./Card";
import Container from "./styles/CardList.styled";

const CardList = () => {
	const { filteredMovies } = useContext(Context);

	return (
		<Container>
			{filteredMovies?.map((m) => (
				<Link to={`/movies/${m._id}`} key={m._id}>
					<Card movie={m} />
				</Link>
			))}
		</Container>
	);
};

export default CardList;
