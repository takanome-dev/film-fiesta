import styled from "styled-components";

const Nav = styled.nav`
	margin: 2rem 0;
	/* background-color: var(--color-background); */

	.pagination {
		list-style: none;
		position: relative;
		box-shadow: 0 0.1rem 2rem var(--color-gray-40);

		/* li + li {
			margin-left: 0.01rem;

			&::before {
				content: "";
				width: 0.1rem;
				background: var(--color-gray-40);
				position: absolute;
				top: 0;
				bottom: 0;
				margin-left: -1rem;
			}
		} */

		li {
			background-color: var(--color-gray-40);
			padding: 0.6rem 0.9rem;
			font-weight: 500;
			border-radius: 0.2rem;
			cursor: pointer;
			transition: background-color 200ms ease-in-out;

			&:hover {
				background-color: var(--color-gray-80);
			}

			&:focus {
				outline: 0.35rem solid var(--color-secondary-60);
			}
		}

		li.active {
			background-color: var(--color-secondary-60);
		}
	}
`;

export default Nav;
