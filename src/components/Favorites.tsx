import { Container } from "./styles/Empty.styled";
import { EmptyFav } from "./svg";

const Favorites = () => {
	return (
		<Container className="flex">
			<EmptyFav />
			<div>
				<p>You have no favorites yet.</p>
				<p>This is where you’ll see movies you like.</p>
			</div>
		</Container>
	);
};

export default Favorites;
