import styled from "styled-components";

export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
	gap: 1rem;
	margin: 2rem auto;

	.image {
		padding: 0 1rem;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			border-radius: 0.8rem;
			box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
		}
	}

	.desc {
		padding: 0 1rem;
		.info {
			display: flex;
			align-items: center;
			margin: 0.5rem 0 1rem;
			span {
				margin-left: 0.5rem;
			}
		}

		.buttons {
			display: flex;

			div + div {
				margin-left: 1rem;
			}

			.rental-rate {
				background-color: var(--color-primary-60);
			}

			.rate {
				background-color: var(--color-secondary);
				h3 {
					color: var(--color-yellow);
					margin-left: 0.5rem;
				}
			}

			.icon {
				background-color: var(--color-gray-20);
				cursor: pointer;
				transition: background-color 300ms ease-in-out;
				&:hover {
					background-color: var(--color-gray-60);
				}
			}

			.icon.liked {
				background-color: var(--color-primary-20);
			}
		}

		.overview {
			margin: 2rem 0 1rem;
			font-size: 1.2rem;
			font-weight: 500;
		}

		.description {
			font-size: 1.1rem;
			line-height: 1.5rem;
		}

		.rent-btn {
			text-decoration: none;
			.btn {
				width: 50%;
				background-color: var(--color-secondary-80);
				margin-top: 3rem;
				padding: 1rem;
				cursor: pointer;
				transition: transform 200ms ease;
				span {
					color: var(--color-dark);
					font-size: 1.3rem;
					font-weight: 500;
					margin-left: 1rem;
				}

				&:hover {
					transform: translateY(-0.1rem);
				}

				@media (max-width: 890px) {
					padding: 1rem 0.5rem;
					span {
						margin-left: 0.5rem;
					}
				}

				@media (max-width: 590px) {
					width: 100%;
					span {
						margin-left: 1rem;
					}
				}
			}
		}
	}

	@media (max-width: 820px) {
		grid-template-columns: 1fr;

		.image {
			img {
				max-height: 100%;
				/* max-width: 100%; */
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
				div {
					margin-top: 1rem;
				}
			}
		}
	}
`;
