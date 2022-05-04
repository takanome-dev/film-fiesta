import styled from "styled-components";
import { appear, skeletonLoading } from "./Global.styled";

export const Container = styled.div`
	margin: 1rem 0 3rem 0;
	/* padding-right: 1rem; */
	/* max-width: 100%; */

	.placeholder {
		width: 85vw;
		height: 85vh;
		animation: ${skeletonLoading} 1s linear infinite alternate;
	}

	.similar {
		margin-top: 2rem;
		max-width: calc(100vw - 8rem);

		p {
			font-size: 1.3rem;
			font-weight: bold;
		}
	}

	.similar.open {
		max-width: calc(100vw - 14rem);
	}

	.movie-details {
		background-repeat: no-repeat;
		background-position: center;
		color: white;
		border-radius: 0.8rem;
		overflow: hidden;

		.details-container {
			display: grid;
			/* grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr)); */
			grid-template-columns: 300px 1fr;
			gap: 2rem;
			padding: 3rem;
			place-content: center;
			height: 100%;
			background-color: rgba(0, 0, 0, 0.5);

			.image {
				/* padding: 0 1rem; */
				width: 300px;
				height: 100%;
				img {
					animation: ${appear} var(--animation-duration)
						var(--animation-timing-curve);
					/* aspect-ratio: 1/1; */
					border-radius: 0.8rem;
					box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
					height: 100%;
					object-fit: cover;
					width: 100%;
				}
			}

			.description {
				/* padding: 0 1rem; */

				.genres {
					margin: 1.5rem 0;

					span + span {
						margin-left: 0.5rem;
					}

					span {
						border: 1px solid white;
						padding: 0.5rem;
						border-radius: 0.8rem;
						background-color: rgba(255, 255, 255, 0.1);
					}
				}
				.info {
					align-items: center;
					display: flex;
					margin: 0.5rem 0;

					p {
						font-weight: 600;
						&:first-child {
							margin-right: 0.5rem;
						}
					}
				}

				.rating {
					display: flex;
					align-items: center;
					color: var(--secondary);

					span {
						font-weight: bold;
						margin: 0 0.5rem;
					}

					p {
						font-weight: 600;
						font-size: 1.1rem;
						&:first-child {
							margin-right: 0.5rem;
						}
					}

					div {
						display: flex;
					}

					div + div {
						margin-left: 0.5rem;
					}

					h3 {
						margin-left: 0.5rem;
					}
				}

				.overview-title {
					font-size: 1.2rem;
					font-weight: 500;
					margin: 1rem 0;
				}

				.overview {
					font-size: 1.1rem;
					line-height: 1.5rem;
				}

				.button-container {
					display: flex;

					button + button {
						margin-left: 1rem;
					}

					a {
						text-decoration: none;
						margin-right: 1rem;

						.btn {
							width: 100%;
						}
					}

					.btn {
						background-color: var(--secondary);
						max-width: 12rem;
						padding: 0.8rem 0.5rem;
					}
				}
			}

			@media (max-width: 920px) {
				padding: 3rem 1rem;
				gap: 1rem;
			}

			@media (max-width: 860px) {
				grid-template-columns: 1fr;
				gap: 1rem;

				.image {
					width: 100%;
					img {
						aspect-ratio: 3/2;
					}
				}
			}

			@media (max-width: 400px) {
				grid-template-columns: 1fr;

				.image {
					padding: 0;
					img {
						max-height: 100%;
					}
				}

				.desc {
					padding: 0;
					.buttons {
						flex-wrap: wrap;
					}
				}
			}
		}
	}
`;
