import styled from "styled-components";

const Container = styled.div`
	margin-bottom: 2rem;

	.scroll-container {
		align-items: center;
		display: flex;
		justify-content: space-between;
		max-width: 50rem;
		overflow: hidden;
		position: relative;
		width: 100%;

		.scroll-buttons {
			left: 0;
			margin: 0 3rem;
			position: absolute;
			transition: all var(--animation-duration) var(--animation-timing-curve);

			ul {
				list-style: none;
				li {
					background: var(--gray-20);
					box-shadow: 0px 2px 3px var(--gray-40);
					border: none;
					border-radius: 0.8rem;
					cursor: pointer;
					font-weight: 500;
					margin-right: 1rem;
					overflow-wrap: normal;
					padding: 0.3rem 0.5rem;
					transition: background var(--animation-duration)
						var(--animation-timing-curve);
					white-space: nowrap;
					&:hover {
						background: var(--gray-40);
					}
					&:focus {
						outline: 0.3rem solid var(--secondary-40);
					}
				}

				li.active {
					background: var(--secondary-40);
				}
			}
		}

		.left-arrow,
		.right-arrow {
			border: none;
			cursor: pointer;
			padding: 0.8rem;
			z-index: 1;
		}

		.left-arrow {
			background: linear-gradient(
				to right,
				var(--background),
				var(--background-80)
			);
			opacity: 0;
		}

		.right-arrow {
			background: linear-gradient(
				to left,
				var(--background),
				var(--background-80)
			);
		}
	}
`;

export default Container;
