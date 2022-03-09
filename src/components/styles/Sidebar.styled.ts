import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
	from {
    transform: translateX(-10rem);
  }
  to {
    transform: translateY(0);
  }
`;

const Navigation = styled.nav`
	.menu {
		max-width: 15rem;
		transition: all 200ms ease-in-out;
		width: 100%;
		height: calc(100vh - 55px);
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 3;
		background-color: #ffffff;
		border-right: 0.09rem solid var(--color-gray-40);
		/* border-top: 0.1rem solid var(--color-gray); */
		&:hover {
			overflow-y: auto;
			overflow-x: hidden;

			::-webkit-scrollbar {
				width: 0.5rem;
			}
		}

		.logo {
			display: none;
			margin: 1rem 0 0 2rem;
			text-decoration: none;
			h1 {
				padding-left: 0.2rem;
				font-size: 2rem;
				color: var(--color-gray);
				@media (max-width: 400px) {
					font-size: 1.5rem;
				}
			}
		}

		.logo.open {
			display: flex;
			align-items: center;
		}

		.sidebar {
			height: 90%;
			width: 100%;
			display: flex;
			justify-content: space-between;
			flex-direction: column;
			margin-top: 1rem;

			.top-links,
			.bottom-links {
				width: 100%;

				.link {
					display: flex;
					justify-content: flex-start;
					text-decoration: none;
					padding: 0.7rem 2rem;
					cursor: pointer;
					transition: all 300ms ease-in-out;
					color: var(--color-dark-80);
					/* font-weight: 500; */

					p {
						margin-left: 1.2rem;
					}

					&:hover {
						background-color: var(--color-gray-20);
						color: var(--color-dark);
					}
				}

				.link.active {
					border-right: 0.2rem solid var(--color-primary);
					p {
						color: var(--color-primary);
					}
				}
			}

			.bottom-links {
				.user {
					display: flex;
					align-items: center;
					margin-top: 1rem;
					color: var(--color-dark-80);
					cursor: pointer;
					padding: 0.7rem 2rem;
					&:hover {
						background-color: var(--color-gray-20);
						color: var(--color-dark);
					}
				}
			}
		}

		@media (max-width: 1110px) {
			max-width: 5rem;

			.sidebar {
				.top-links,
				.bottom-links {
					.link {
						padding-left: 1.2rem;
						flex-direction: column;
						align-items: flex-start;
						width: 100%;
						/* color: var(--color-dark); */

						p {
							font-size: 0.7rem;
							margin: 0.5rem auto 0 -0.5rem;
							white-space: nowrap;
						}
					}
				}
			}
		}

		@media (max-width: 650px) {
			display: none;
			max-width: 50%;
			height: 100%;

			.sidebar {
				align-items: flex-start;

				.logo {
					display: initial;
				}

				.top-links,
				.bottom-links {
					margin-bottom: 4rem;

					.link {
						padding: 0.7rem 0 0.7rem 2rem;
						flex-direction: row;
						/* flex-wrap: nowrap; */

						p {
							margin: 0 auto 0 1.2rem;
							font-size: 1rem;
						}
					}
				}
			}
		}

		@media (max-width: 470px) {
			max-width: 80%;
		}
	}

	.menu.open {
		display: initial;
		animation: ${slideIn} 500ms;
	}
`;

export default Navigation;
