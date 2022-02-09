import { useContext } from "react";
import { Context } from "../context/GlobalContext";
import Card from "./Card";
import Container from "./styles/CardList.styled";

const CardList = () => {
	const { movies } = useContext(Context);

	return (
		<Container>
			{movies.map((m) => (
				<Card key={m._id} movie={m} />
			))}
		</Container>
	);
};

export default CardList;
