import styled from "styled-components";

export const Container = styled.header`
	position: sticky;
	top: 0;
	z-index: 2;
	width: 100%;
	box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.08);
	background-color: white;
	margin-bottom: 1rem;

	.container {
		/* width: 100%; */
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem 1rem;
		position: relative;

		.logo {
			margin-right: 1rem;
			img {
				max-width: 100%;
				width: 8rem;
			}
		}

		input {
			max-width: 40rem;
			width: 100%;
			padding: 0.5rem 1rem;
			color: var(--color-dark-80);
			background-color: var(--color-background);
			border: none;
			border-radius: 0.6rem;
			&:focus {
				outline: 3px solid var(--color-secondary-20);
			}
		}

		.search {
			display: none;
			position: absolute;
			right: 33%;
			margin-right: 1rem;
			cursor: pointer;
			padding: 0.5rem;
			border-radius: 50%;
			&:hover {
				background-color: var(--color-gray-20);
			}
		}

		.btn {
			background-color: var(--color-secondary-40);
			color: var(--color-dark);
			box-shadow: 0 0.1rem 1rem var(--color-secondary-40);
			display: flex;
			align-items: center;
			margin-left: 0.5rem;
			text-decoration: none;
			transition: all 200ms ease;
			&:hover {
				background-color: var(--color-secondary-80);
			}
		}

		@media screen and (max-width: 948px) {
			input {
				max-width: 20rem;
			}
		}
		@media screen and (max-width: 610px) {
			input {
				max-width: 10rem;
			}
		}
		@media screen and (max-width: 480px) {
			input {
				display: none;
			}

			.search {
				display: initial;
				/* justify-self: flex-end; */
			}

			/* .btn {
				justify-self: flex-start;
			} */
		}
	}
`;
