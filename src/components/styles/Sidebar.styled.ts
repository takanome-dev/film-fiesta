import styled, { keyframes } from "styled-components";
import { sidebarLoad } from "./Global.styled";

const slideIn = keyframes`
	from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const Navigation = styled.nav`
	.container {
		/* animation: ${sidebarLoad} var(--animation-duration)
			var(--animation-timing-curve);
		animation-delay: var(--animation-duration);
		animation-fill-mode: forwards; */
		background-color: #ffffff;
		border-right: 0.09rem solid var(--gray-40);
		height: calc(100vh - var(--header-height));
		left: 0;
		overflow-x: hidden;
		position: sticky;
		width: 5rem;
		transition: width var(--animation-duration) var(--animation-timing-curve);
		/* transform: translateX(-100%); */
		top: var(--header-height);

		::-webkit-scrollbar {
			width: 0.5rem;
		}

		.logo-container {
			display: none;
			margin-top: 0.5rem;
			padding-left: 1.2rem;
			width: 90%;
		}

		.sidebar {
			display: flex;
			flex-direction: column;
			height: 80%;
			padding-top: 2rem;
			width: 100%;

			.top-links {
				flex-grow: 1;
				overflow-y: auto;
				overflow-x: hidden;
			}

			.top-links,
			.bottom-links {
				width: 100%;
			}

			.link-name {
				display: none;
				font-weight: 600;
				margin-left: 1.2rem;
			}

			.link {
				align-items: center;
				cursor: pointer;
				color: var(--dark-80);
				display: flex;
				justify-content: flex-start;
				padding: 1rem 0 1rem 1.4rem;
				position: relative;
				text-decoration: none;

				&:hover {
					background-color: var(--gray-10);
					color: var(--dark);
				}
			}

			.link.active {
				background-color: var(--gray-10);
				&::before {
					content: "";
					background-color: var(--primary);
					height: 100%;
					left: 0;
					position: absolute;
					width: 0.25rem;
				}
				p {
					color: var(--primary);
				}
			}

			.bottom-links {
				.user {
					align-items: center;
					color: var(--dark-80);
					cursor: pointer;
					display: flex;
					margin-top: 1rem;
					padding: 0.7rem 1.2rem;
					&:hover {
						background-color: var(--gray-20);
						color: var(--dark);
					}
				}
			}
		}

		.copy {
			margin-top: 2rem;
			margin-left: 1.2rem;
			font-weight: bold;
			display: none;
		}
	}

	.container.open {
		width: 12rem;
		.link-name {
			display: block;
		}
		.copy {
			display: block;
		}
	}

	@media (max-width: 650px) {
		.container {
			bottom: 0;
			/* display: none; */
			height: 100%;
			position: fixed;
			width: 15rem;
			top: 0;
			transform: translateX(-100%);
			z-index: 3;

			.logo-container {
				display: block;
			}

			.sidebar {
				height: 80%;
			}
		}

		.container.open {
			animation: ${slideIn} var(--animation-duration)
				var(--animation-timing-curve);
			animation-fill-mode: forwards;
			/* display: initial; */
			width: 15rem;

			.link-name {
				display: block;
			}
		}
	}
`;

export default Navigation;
