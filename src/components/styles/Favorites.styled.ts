import styled from "styled-components";

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
	/* grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr)); */
	gap: 1rem;
`;

export default Container;
