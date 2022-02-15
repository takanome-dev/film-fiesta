import Card from "./Card";
import Container from "./styles/CardList.styled";
import { CardListProps } from "./types";

const CardList: React.FC<CardListProps> = ({ movies }) => {
	return (
		<Container>
			{movies?.map((m) => (
				<Card key={m._id} movie={m} />
			))}
		</Container>
	);
};

export default CardList;
