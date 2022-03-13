import styled from "styled-components";
import { comingSoon } from "../assets";

const Container = styled.div`
	flex-direction: column;
	img {
		max-width: 20rem;
		width: 100%;
	}

	p {
		font-size: 4rem;
		font-weight: bold;
		margin-top: 3rem;
		background: linear-gradient(
			120deg,
			var(--color-primary),
			var(--color-secondary)
		);
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
		background-clip: text;
		text-align: center;
		@media (max-width: 360px) {
			font-size: 3rem;
		}
	}
`;

const Settings = () => {
	return (
		<Container className="flex">
			<img src={comingSoon} alt="Coming Soon Image" />
			<p>Coming Soon</p>
		</Container>
	);
};

export default Settings;
