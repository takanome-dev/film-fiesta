import styled from "styled-components";

export const Container = styled.header`
	position: sticky;
	top: 0;
	z-index: 2;
	width: 100%;
	box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.08);
	background-color: white;
	/* margin-bottom: 1rem; */

	.container {
		/* width: 100%; */
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem 1rem;
		position: relative;

		.logo {
			margin-right: 1rem;
			text-decoration: none;
			h1 {
				padding-left: 0.2rem;
				color: var(--color-dark-60);
				@media (max-width: 400px) {
					font-size: 1.5rem;
				}
			}

			&:focus {
				outline: 0.35rem solid var(--color-secondary-40);
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
			transition: outline 100ms ease;
			&:focus {
				outline: 0.35rem solid var(--color-secondary-20);
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

		.bars {
			display: none;
			cursor: pointer;
			margin-left: 1rem;
		}

		@media screen and (max-width: 948px) {
			input {
				max-width: 20rem;
			}
		}
		@media screen and (max-width: 650px) {
			input {
				max-width: 22rem;
			}

			.btn {
				display: none;
			}

			.avatar {
				display: none;
			}

			.bars {
				display: initial;
			}
		}
	}
`;
