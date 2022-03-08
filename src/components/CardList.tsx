import { useContext } from "react";
import { Context } from "../context/GlobalContext";
import Card from "./Card";
import Container from "./styles/CardList.styled";
import { Loader } from "./svg";

const CardList = () => {
	const { filteredMovies, loadingMovies } = useContext(Context);

	return (
		<>
			{loadingMovies ? (
				<div className="loading">
					<Loader size={32} />
				</div>
			) : (
				<Container>
					{filteredMovies?.map((m) => (
						<Card movie={m} key={m._id} />
					))}
				</Container>
			)}
		</>
	);
};

export default CardList;
