import { useContext } from "react";
import { Card } from "../components";
import Container from "../components/styles/CardList.styled";
import { Container as Empty } from "../components/styles/Empty.styled";
import { EmptyRental } from "../components/svg";
import { Context } from "../context/GlobalContext";

const Rentals = () => {
	const { rentals } = useContext(Context);

	return (
		<>
			{rentals.length > 0 ? (
				<Container>
					{rentals.map((r) => (
						<Card movie={r.movie} key={r._id} />
					))}
				</Container>
			) : (
				<Empty className="flex">
					<EmptyRental />
					<div>
						<p>You haven't rented any movies yet.</p>
						<p>Start by renting some movies.</p>
					</div>
				</Empty>
			)}
		</>
	);
};

export default Rentals;
