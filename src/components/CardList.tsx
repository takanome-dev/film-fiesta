import { Movies } from "../types";
import Card from "./Card";
import Container from "./styles/CardList.styled";

type Props = {
	movies: Movies[];
};

const CardList: React.FC<Props> = ({ movies }) => {
	return (
		<Container>
			{movies?.map((m) => (
				<Card movie={m} key={m.id} />
			))}
		</Container>
	);
};

export default CardList;
