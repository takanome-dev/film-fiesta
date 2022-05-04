import { Link } from "react-router-dom";
import styled from "styled-components";
import Wrapper from "../components/common/Wrapper";

const Container = styled.div`
	align-items: center;
	display: flex;
	justify-content: center;

	h1 {
		text-align: center;
	}

	p {
		font-size: 1.2rem;
		margin-top: 1rem;
	}

	a {
		align-self: center;
		background-color: var(--secondary-40);
		border-radius: 0.3rem;
		color: var(--dark);
		font-size: 1.3rem;
		font-weight: 500;
		margin-top: 2rem;
		padding: 1rem 0.5rem;
		text-align: center;
		text-decoration: none;
		width: 50%;
		&:hover {
			background-color: var(--secondary-60);
		}

		@media (max-width: 460px) {
			width: 100%;
		}
	}
`;

const NotFound = () => {
	return (
		<Container>
			<Wrapper width="30rem">
				<h1>👀 &nbsp;-&nbsp; Not Found</h1>
				<p>
					Sorry, we couldn't find what you were looking for or the page no
					longer exists 😟
				</p>
				<Link to="/">Go back to home</Link>
			</Wrapper>
		</Container>
	);
};

export default NotFound;
