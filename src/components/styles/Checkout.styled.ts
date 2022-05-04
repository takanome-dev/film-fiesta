import styled from "styled-components";

const Container = styled.div`
	form {
		column-gap: 5rem;
		display: grid;
		grid-template-columns: 0.7fr 1fr;

		.title {
			font-size: 1.5rem;
			font-weight: 500;
			margin: -1rem 0 1rem;
			text-align: center;
			text-decoration: underline;
			text-decoration-style: double;
		}

		.order {
			.order-img {
				margin-bottom: 1rem;

				img {
					border-radius: 0.8rem;
					box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
					height: 100%;
					object-fit: cover;
					width: 100%;
				}
			}

			.order-details {
				p {
					font-size: 1.1rem;
					margin-top: 0.5rem;
					span {
						margin-left: 1rem;
					}
				}

				.total {
					align-items: center;
					border-top: 0.1rem solid var(--color-gray-40);
					display: flex;
					justify-content: space-between;
					margin-top: 1rem;
				}
			}
		}

		.payment {
			.wrapper {
				margin-top: 2rem;
				.label {
					font-size: 1.1rem;
				}

				.input-card {
					background-color: var(--background);
					border: none;
					border-radius: 0.6rem;
					margin: 0.5rem 0 1rem;
					padding: 0.8rem 1rem;
					position: relative;
					transition: outline 100ms ease;
					&:focus {
						outline: 0.35rem solid var(--secondary-20);
					}
				}

				.info {
					color: var(--secondary);
					font-size: 1.1rem;
					font-weight: 500;
				}
			}
		}

		@media (max-width: 995px) {
			column-gap: 3rem;
			grid-template-columns: 1fr 1fr;
		}

		@media (max-width: 850px) {
			column-gap: 1rem;
			grid-template-columns: 1fr 1fr;
		}

		@media (max-width: 748px) {
			column-gap: 0;
			grid-template-columns: 1fr;

			.title {
				text-align: start;
			}

			.order {
				.order-details {
					margin-bottom: 2rem;
				}
			}
		}

		@media (max-width: 580px) {
			.title {
				text-align: start;
				margin: 0 0 1rem;
			}
		}
	}
`;

export default Container;
