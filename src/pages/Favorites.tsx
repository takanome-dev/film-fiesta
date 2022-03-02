import { useContext } from "react";
import { Card } from "../components";
import Title from "../components/common/Title";
import Container from "../components/styles/CardList.styled";
import { Container as Empty } from "../components/styles/Empty.styled";
import { EmptyFav } from "../components/svg";
import { Context } from "../context/GlobalContext";

const Favorites = () => {
	const { favorites } = useContext(Context);
	return (
		<>
			{favorites.length > 0 ? (
				<>
					<Title name="Favorites" />
					<Container>
						{favorites.map((f) => (
							<Card movie={f.movie} key={f._id} />
						))}
					</Container>
				</>
			) : (
				<Empty className="flex">
					<EmptyFav />
					<div>
						<p>You have no favorites yet.</p>
						<p>This is where you’ll see movies you like.</p>
					</div>
				</Empty>
			)}
		</>
	);
};

export default Favorites;
