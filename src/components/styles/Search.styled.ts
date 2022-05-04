import styled from "styled-components";

const Container = styled.div`
	margin: 1rem 0 2rem 0;
	border: 0.1rem solid var(--background);

	.title {
		font-size: 1.4rem;
		font-weight: 600;
		text-transform: uppercase;
	}

	.input-container {
		margin-top: 1rem;
	}

	.search-results {
		margin-top: 2rem;
	}
`;

export default Container;
