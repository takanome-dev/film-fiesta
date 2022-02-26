import styled from "styled-components";

const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	/* z-index: 3; */

	.wrapper {
		position: absolute;
		z-index: 4;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 30rem;

		form {
			.profile-label {
				width: 6rem;
				height: 6rem;
				border-radius: 50%;
				border: 0.1rem solid var(--color-gray-40);
				cursor: pointer;
				margin-bottom: 2rem;
				overflow: hidden;
				.profile-img {
					/* overflow: hidden; */
					/* max-width: 100%; */
					img {
						width: 100%;
						height: 100%;
						/* border-radius: 50%; */
						object-fit: cover;
						/* object-position: center; */
					}
				}

				.profile-input {
					display: none;
				}
				.tooltip {
					visibility: hidden;
					position: absolute;
					top: 23%;
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
						border-color: transparent var(--color-dark) transparent transparent;
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
`;

export default Container;
