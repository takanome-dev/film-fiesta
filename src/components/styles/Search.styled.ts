import styled from "styled-components";
import { appear } from "./Global.styled";

const Container = styled.div`
	width: 30rem;
	position: relative;
	input {
		width: 100%;
		padding: 0.5rem 1rem;
		color: var(--color-dark-80);
		background-color: var(--color-background);
		border: none;
		border-radius: 0.6rem;
		transition: outline 100ms ease;
		&:focus {
			outline: 0.35rem solid var(--color-secondary-20);
		}
	}

	.search-list {
		position: absolute;
		z-index: 2;
		background-color: #fff;
		padding: 1rem 0;
		margin-top: 0.3rem;
		border-radius: 0.5rem;
		width: 100%;
		max-height: calc(100vh - 60px);
		box-shadow: 0rem 1rem 3rem rgba(0, 0, 0, 0.2);
		animation: ${appear} 300ms;
		overflow-y: auto;

		.link {
			text-decoration: none;

			.search-result {
				padding: 0.5rem 1rem;
				color: var(--color-dark);
				&:hover {
					background-color: var(--color-gray-20);
				}

				.movie-details {
					small + small {
						margin-left: 0.5rem;
						&::before {
							content: "-";
							margin-right: 0.5rem;
						}
					}
				}
			}
		}
	}

	@media (max-width: 768px) {
		width: 20rem;
	}
`;

export default Container;
