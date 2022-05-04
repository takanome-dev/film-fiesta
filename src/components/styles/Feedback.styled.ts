import styled from "styled-components";
import { appear, slideIn } from "./Global.styled";

const Container = styled.div`
	align-items: center;
	animation: ${appear} var(--animation-duration);
	display: flex;
	height: 100%;
	justify-content: center;
	left: 0;
	position: absolute;
	top: 0;
	width: 100%;

	.wrapper {
		--animation-duration: 500ms;
		animation: ${slideIn} var(--animation-duration);
		margin: 0 1rem;
		max-width: 30rem;
		position: fixed;
		z-index: 4;

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

		@media (max-width: 340px) {
			position: relative;
		}
	}
`;

export default Container;
