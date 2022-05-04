import styled from "styled-components";
import { navLoad } from "./Global.styled";

export const Container = styled.header`
	animation: ${navLoad} var(--animation-duration) var(--animation-timing-curve);
	background-color: white;
	box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.08);
	height: var(--header-height);
	position: sticky;
	width: 100%;
	top: 0;
	z-index: 2;

	.container {
		align-items: center;
		display: flex;
		justify-content: space-between;
		padding: 0.5rem 1rem;
		position: relative;

		div {
			display: flex;

			.avatar {
				margin-left: 2rem;
			}

			.search-icon {
				display: none;
			}
		}

		/* .logo-container {
			margin-left: 0.5rem;

			.bars {
				border: none;
				background: none;
				cursor: pointer;
				margin-right: 1rem;
			}

			.logo {
				height: 2.5rem;
				width: 100%;

				img {
					height: 100%;
					width: 100%;
				}
			}
		} */

		/* .btn {
			align-items: center;
			background-color: var(--secondary-40);
			box-shadow: 0 0.1rem 1rem var(--secondary-40);
			color: var(--dark);
			display: flex;
			margin-left: 0.5rem;
			text-decoration: none;
			transition: all 200ms ease;
			&:hover {
				background-color: var(--secondary-80);
			}
		} */

		@media screen and (max-width: 650px) {
			.btn {
				display: none;
			}

			.avatar {
				display: none;
			}
		}

		@media screen and (max-width: 500px) {
			.search-icon {
				display: initial;
			}
			.search-input {
				display: none;
			}
		}
	}
`;
