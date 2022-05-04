import styled from "styled-components";

const Nav = styled.nav`
	margin: 2rem 0;

	.pagination {
		box-shadow: 0 0.1rem 2rem var(--gray-40);
		list-style: none;
		position: relative;

		li {
			background-color: var(--gray-40);
			padding: 0.6rem 0.9rem;
			border-radius: 0.2rem;
			border: 0.1rem solid var(--gray);
			cursor: pointer;
			transition: background-color var(--animation-duration)
				var(--animation-timing-curve);

			&:hover {
				background-color: var(--gray-80);
			}
		}

		li.active {
			background-color: var(--secondary-60);
		}
	}
`;

export default Nav;
