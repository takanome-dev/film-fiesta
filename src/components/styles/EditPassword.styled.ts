import styled from "styled-components";
import { slideIn } from "./Global.styled";

const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	animation-name: ${slideIn};
	animation-duration: 300ms;

	.wrapper {
		z-index: 4;
		width: 30rem;
		animation-name: ${slideIn};
		animation-duration: 500ms;
		margin: 0 1rem;
	}
`;

export default Container;
