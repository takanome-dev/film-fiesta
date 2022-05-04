import styled from "styled-components";
import { slideIn } from "./Global.styled";

const Container = styled.div`
	align-items: center;
	animation-name: ${slideIn};
	animation-duration: var(--animation-duration);
	display: flex;
	height: 100%;
	justify-content: center;
	left: 0;
	position: absolute;
	top: 0;
	width: 100%;

	.modal-wrapper {
		--animation-duration: 500ms;
		animation: ${slideIn} var(--animation-duration);
		margin: 0 1rem;
		position: fixed;
		width: 30rem;
		z-index: 4;
		.modal-header {
			align-items: center;
			display: flex;
			justify-content: space-between;
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
				border-radius: 50%;
				cursor: pointer;
				font-size: 2rem;
				font-weight: 500;
				padding: 0.1rem 0.6rem;
				&:hover {
					background-color: var(--gray-20);
				}
			}
		}

		@media (max-width: 510px) {
			position: relative;
		}
	}
`;

export default Container;
