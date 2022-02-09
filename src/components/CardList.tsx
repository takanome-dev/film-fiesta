import Card from "./Card";
import Container from "./styles/CardList.styled";
import { CardListProps } from "./types";

const CardList: React.FC<CardListProps> = ({ movies, handleLike }) => {
	return (
		<Container>
			{movies.map((m) => (
				<Card key={m._id} movie={m} handleLike={handleLike} />
			))}
		</Container>
	);
};

export default CardList;
