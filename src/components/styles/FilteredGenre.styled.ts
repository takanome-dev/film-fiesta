import styled from "styled-components";

const Container = styled.div`
	margin-bottom: 2rem;

	.scroll-container {
		max-width: 50rem;
		width: 100%;
		overflow: hidden;
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.scroll-buttons {
			position: absolute;
			left: 0;
			margin: 0 3rem;
			transition: all 0.5s ease-in-out;

			ul {
				list-style: none;
				li {
					box-shadow: 0px 2px 3px var(--color-gray-40);
					background: var(--color-gray-20);
					padding: 0.3rem 0.5rem;
					overflow-wrap: normal;
					margin-right: 1rem;
					border: none;
					border-radius: 0.8rem;
					cursor: pointer;
					font-weight: 500;
					white-space: nowrap;
					transition: background 200ms ease;
					&:hover {
						background: var(--color-gray-40);
					}
					&:focus {
						outline: 0.3rem solid var(--color-secondary-40);
					}
				}

				li.active {
					background: var(--color-secondary-40);
				}
			}
		}

		.left-arrow,
		.right-arrow {
			z-index: 1;
			cursor: pointer;
			padding: 0.8rem;
			border: none;
		}

		.left-arrow {
			background: linear-gradient(
				to right,
				var(--color-background),
				var(--color-background-80)
			);
			opacity: 0;
		}

		.right-arrow {
			background: linear-gradient(
				to left,
				var(--color-background),
				var(--color-background-80)
			);
		}
	}
`;

export default Container;
