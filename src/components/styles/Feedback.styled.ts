import styled from "styled-components";
import { appear, slideIn } from "./Global.styled";

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	animation: ${appear} 300ms;

	.wrapper {
		z-index: 4;
		max-width: 30rem;
		animation: ${slideIn} 500ms;
		margin: 0 1rem;

		h1 {
			margin-bottom: 2rem;
			text-align: center;
		}

		@media (max-width: 400px) {
			h1 {
				font-size: 1.6rem;
			}
		}

		form {
			display: flex;
			flex-direction: column;
			width: 100%;

			button {
				padding: 1rem;
				width: 100%;
			}
		}
	}
`;

export default Container;
