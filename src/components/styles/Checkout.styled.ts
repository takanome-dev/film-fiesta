import styled from "styled-components";

const Container = styled.div`
	form {
		display: grid;
		grid-template-columns: 0.7fr 1fr;
		column-gap: 5rem;

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
					width: 100%;
					height: 100%;
					object-fit: cover;
					/* object-position: top; */
					border-radius: 0.8rem;
					box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
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
					display: flex;
					justify-content: space-between;
					align-items: center;
					border-top: 0.1rem solid var(--color-gray-40);
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
					position: relative;
					margin: 0.5rem 0 1rem;
					padding: 0.8rem 1rem;
					background-color: var(--color-background);
					border: none;
					border-radius: 0.6rem;
					transition: outline 100ms ease;
					&:focus {
						outline: 0.35rem solid var(--color-secondary-20);
					}
				}

				.info {
					color: var(--color-secondary);
					font-size: 1.1rem;
					font-weight: 500;
				}
			}
		}

		@media (max-width: 995px) {
			grid-template-columns: 1fr 1fr;
			column-gap: 3rem;
		}

		@media (max-width: 850px) {
			grid-template-columns: 1fr 1fr;
			column-gap: 1rem;
		}

		@media (max-width: 748px) {
			grid-template-columns: 1fr;
			column-gap: 0;

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
