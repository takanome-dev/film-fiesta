import { Container } from "./styles/Empty.styled";
import { EmptyRental } from "./svg";

const Rentals = () => {
	return (
		<Container className="flex">
			<EmptyRental />
			<div>
				<p>You haven't rented any movies yet.</p>
				<p>Start by renting some movies.</p>
			</div>
		</Container>
	);
};

export default Rentals;
