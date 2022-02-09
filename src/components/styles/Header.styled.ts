import styled from "styled-components";

export const Container = styled.header`
	position: sticky;
	top: 0;
	/* z-index: 1; */
	width: 100%;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
	background-color: white;

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
			box-shadow: 0px 0px 5px #b7dbf0;
			display: flex;
			align-items: center;
			margin-left: 0.5rem;
			text-decoration: none;
			transition: all 200ms ease;
			/* box-shadow: 0px 0px 5px #a8d8f3; */
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
