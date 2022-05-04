import styled from "styled-components";
import { slideIn } from "./Global.styled";

const Container = styled.div`
	align-items: center;
	animation: ${slideIn} var(--animation-duration);
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
			margin-bottom: 2rem;
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

		form {
			.modal-profile {
				position: relative;
				.profile-label {
					border-radius: 50%;
					border: 0.1rem solid var(--gray-40);
					cursor: pointer;
					height: 6rem;
					margin-bottom: 2rem;
					overflow: hidden;
					width: 6rem;
					.profile-img {
						img {
							object-fit: cover;
							height: 100%;
							width: 100%;
						}
					}

					.profile-input {
						display: none;
					}
					.tooltip {
						background-color: var(--dark);
						border-radius: 0.5rem;
						color: #fff;
						left: 50%;
						padding: 0.5rem;
						visibility: hidden;
						position: absolute;
						top: 50%;
						transform: translate(-50%, -50%);
						z-index: 3;
						&::before {
							border-style: solid;
							border-color: transparent var(--dark) transparent transparent;
							border-width: 0.5rem;
							content: " ";
							margin-top: -0.5rem;
							position: absolute;
							right: 100%;
							top: 50%;
						}

						@media (max-width: 560px) {
							left: 48%;
							top: 35%;
						}
					}

					&:hover {
						.tooltip {
							visibility: visible;
						}
					}
				}
			}
		}

		@media (max-width: 510px) {
			position: relative;
		}
	}
`;

export default Container;
