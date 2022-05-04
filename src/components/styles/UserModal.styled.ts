import styled from "styled-components";
import { appear } from "./Global.styled";

const Container = styled.div`
	animation: ${appear} 100ms;
	.wrapper {
		background-color: #fff;
		border-radius: 0.5rem;
		box-shadow: 0 0 0.9rem rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		justify-content: center;
		max-width: 12rem;
		position: absolute;
		right: 3%;
		top: 80%;
		transition: all var(--animation-duration) var(--animation-timing-curve);
		width: 100%;
		z-index: 2;

		a {
			align-items: center;
			color: var(--dark-80);
			cursor: pointer;
			display: flex;
			justify-content: flex-start;
			padding: 0.8rem 1rem;
			text-decoration: none;
			width: 100%;

			&:first-child {
				margin-top: 0.5rem;
			}

			&:hover {
				background-color: var(--gray-20);
				color: var(--dark);
			}

			p {
				margin-left: 1rem;
			}
		}

		.feedback {
			font-weight: 500;
			font-size: 1.1rem;
		}

		@media (max-width: 650px) {
			/* bottom: 50%; */
			top: 70%;
			box-shadow: 0 0.2rem 1.5rem 0.2rem rgba(0, 0, 0, 0.09);
			left: 25%;
			z-index: 4;
			height: 15%;
		}
	}
`;

export default Container;
