import styled from "styled-components";

const Container = styled.div`
	width: 2.5rem;
	height: 2.5rem;
	cursor: pointer;
	overflow: hidden;
	border: 0.1rem solid var(--color-gray-40);
	border-radius: 50%;

	/* &:focus {
		outline: 0.2rem solid var(--color-secondary-40);
	} */

	img {
		max-width: 100%;
		object-fit: cover;
		object-position: center;
	}

	@media (max-width: 650px) {
		margin-right: 1rem;
	}
`;

export default Container;
