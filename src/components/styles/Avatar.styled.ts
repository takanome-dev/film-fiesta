import styled from "styled-components";

const Container = styled.div`
	border: 0.1rem solid var(--gray-40);
	border-radius: 50%;
	cursor: pointer;
	height: 2.5rem;
	overflow: hidden;
	width: 2.5rem;

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
