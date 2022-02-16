import styled from "styled-components";
import { comming } from "../assets";

const Container = styled.div`
	flex-direction: column;
	img {
		max-width: 20rem;
		width: 100%;
	}

	p {
		font-size: 3rem;
		margin-top: 3rem;
		color: linear-gradient(
			120deg,
			var(--color-primary),
			var(--color-secondary)
		);
	}
`;

const Settings = () => {
	return (
		<Container className="flex">
			<img src={comming} alt="Comming Soon Image" />
			<p>Comming Soon</p>
		</Container>
	);
};

export default Settings;
