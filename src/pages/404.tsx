import { Link } from "react-router-dom";
import styled from "styled-components";
import Wrapper from "../components/common/Wrapper";

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	h1 {
		text-align: center;
	}

	p {
		margin-top: 1rem;
		font-size: 1.2rem;
	}

	a {
		align-self: center;
		text-align: center;
		text-decoration: none;
		padding: 1rem 0.5rem;
		background-color: var(--color-secondary-40);
		color: var(--color-dark);
		font-size: 1.3rem;
		font-weight: 500;
		border-radius: 0.3rem;
		width: 50%;
		margin-top: 2rem;
		&:hover {
			background-color: var(--color-secondary-60);
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
