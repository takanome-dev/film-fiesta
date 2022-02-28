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

	.modal-wrapper {
		z-index: 4;
		width: 30rem;
		animation-name: ${slideIn};
		animation-duration: 500ms;
		margin: 0 1rem;
		.modal-header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 3rem;
			margin-top: -1rem;
			@media (max-width: 650px) {
				margin-top: 0;
			}

			p {
				font-size: 1.5rem;
				font-weight: 500;
			}

			span {
				font-size: 2rem;
				font-weight: 500;
				padding: 0.1rem 0.6rem;
				border-radius: 50%;
				cursor: pointer;
				&:hover {
					background-color: var(--color-gray-20);
				}
			}
		}
	}
`;

export default Container;
