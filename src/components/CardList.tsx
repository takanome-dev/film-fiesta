import { useContext } from "react";
import { Context } from "../context/GlobalContext";
import Card from "./Card";
import Container from "./styles/CardList.styled";

const CardList = () => {
	const { filteredMovies } = useContext(Context);

	return (
		<Container>
			{filteredMovies?.map((m) => (
				<Card movie={m} key={m._id} />
			))}
		</Container>
	);
};

export default CardList;
