import styled from "styled-components";

const Container = styled.div`
	form {
		align-items: center;
		background-color: white;
		border: 0.1rem solid var(--gray-40);
		border-radius: 0.6rem;
		display: flex;
		overflow: hidden;
		height: 2.5rem;

		input {
			border: none;
			color: var(--dark-80);
			padding: 0 1rem;
			width: 100%;
			height: 100%;
			transition: outline 100ms ease;

			&:focus {
				outline: 0.2rem solid var(--secondary-40);
			}

			&::placeholder {
				color: var(--gray);
			}

			&::-webkit-search-cancel-button {
				display: none;
			}
		}

		button {
			cursor: pointer;
			background-color: white;
			/* border: 0.1rem solid var(--color-gray-40); */
			border: none;
			height: 2.5rem;
			width: 3rem;
		}
	}
`;

export default Container;
