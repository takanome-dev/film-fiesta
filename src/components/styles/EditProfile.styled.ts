import styled from "styled-components";
import { slideIn } from "./Global.styled";

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	animation-name: ${slideIn};
	animation-duration: 300ms;
	/* z-index: 3; */

	.modal-wrapper {
		width: 30rem;
		z-index: 4;
		animation-name: ${slideIn};
		animation-duration: 500ms;
		margin: 0 1rem;

		.modal-header {
			display: flex;
			justify-content: space-between;
			align-items: center;
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

		form {
			.modal-profile {
				.profile-label {
					width: 6rem;
					height: 6rem;
					border-radius: 50%;
					border: 0.1rem solid var(--color-gray-40);
					cursor: pointer;
					margin-bottom: 2rem;
					overflow: hidden;
					.profile-img {
						img {
							width: 100%;
							height: 100%;
							object-fit: cover;
						}
					}

					.profile-input {
						display: none;
					}
					.tooltip {
						visibility: hidden;
						position: absolute;
						top: 33%;
						left: 51%;
						transform: translate(-50%, -50%);
						background-color: var(--color-dark);
						color: #fff;
						z-index: 3;
						padding: 0.5rem;
						border-radius: 0.5rem;
						&::before {
							content: " ";
							position: absolute;
							right: 100%;
							top: 50%;
							border-width: 0.5rem;
							margin-top: -0.5rem;
							border-style: solid;
							border-color: transparent var(--color-dark) transparent
								transparent;
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
	}
`;

export default Container;
