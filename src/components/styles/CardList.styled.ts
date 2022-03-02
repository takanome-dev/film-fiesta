import styled from "styled-components";

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
	/* grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr)); */
	gap: 1rem;

	.card {
		border-radius: 0.8rem;
		overflow: hidden;
		cursor: pointer;
		position: relative;
		transition: box-shadow 300ms ease-in-out;

		.rate {
			position: absolute;
			top: 0;
			background-color: var(--color-secondary);
			color: var(--color-yellow);
			padding: 0.5rem;
			border-radius: 0 0 0.8rem 0;
			p {
				margin-left: 0.5rem;
				font-weight: bold;
			}
		}

		.card-hover {
			position: absolute;
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 4rem;
			bottom: 0;
			left: 0;
			width: 100%;
			overflow: hidden;
			background: linear-gradient(rgba(0, 0, 0, 0.5), rgb(0, 0, 0));
			opacity: 0;
			transition: opacity 300ms ease-in-out;

			h3 {
				color: #fff;
				margin-left: 0.6rem;
			}

			.icons {
				.icon-container {
					background-color: var(--color-gray-80);
					margin-right: 0.6rem;
					padding: 0.6rem;
					border-radius: 0.3rem;
					border: none;
					cursor: pointer;
					transition: all 300ms ease-in-out;
					&:hover {
						background-color: var(--color-gray);
					}
					&:active {
						transform: scale(0.95);
					}
				}

				.icon-container.liked {
					background-color: var(--color-primary-60);
				}
			}
		}

		&:hover {
			box-shadow: 0 2px 15px rgba(0, 0, 0, 0.6);
			.card-hover {
				opacity: 1;
			}
		}

		img {
			max-width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
		}
	}
`;

export default Container;
