import styled from "styled-components";

const Aside = styled.aside`
	max-width: 15rem;
	width: 100%;
	height: calc(100vh - 50px);
	position: fixed;
	left: 0;
	z-index: 3;
	background-color: #ffffff;
	/* border-right: 0.2rem solid var(--color-gray-40); */
	/* border-top: 0.1rem solid var(--color-gray); */
	&:hover {
		overflow-y: auto;

		::-webkit-scrollbar {
			width: 0.5rem;
		}
	}

	.sidebar {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		margin-top: 2rem;
		height: 100%;
		width: 100%;

		.top-links,
		.bottom-links {
			width: 100%;

			.link {
				text-decoration: none;
				margin-top: 0.2rem;
				padding: 0.7rem 0 0.7rem 2rem;
				display: flex;
				justify-content: flex-start;
				transition: all 200ms ease-in-out;

				p {
					margin-left: 1.2rem;
					color: var(--color-dark);
				}

				&:hover {
					background-color: var(--color-gray-20);
				}
			}

			.link.active {
				/* border-right: 0.3rem solid var(--color-primary); */
				p {
					color: var(--color-primary);
				}
			}
		}
	}
`;

export default Aside;
