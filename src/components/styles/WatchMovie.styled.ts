import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 1rem 0 3rem 0;

	.video {
		height: calc(90vh - var(--header-height));
		margin-bottom: 2rem;
	}

	.description {
		.genres {
			margin: 1rem 0;

			span + span {
				margin-left: 0.5rem;
			}

			span {
				background-color: var(--gray-20);
				border-radius: 0.8rem;
				padding: 0.3rem 0.5rem;
			}
		}

		.rating {
			align-items: center;
			color: var(--secondary);
			display: flex;
			margin-top: 1rem;

			span {
				font-weight: bold;
				margin: 0 0.5rem;
			}

			p {
				font-weight: 600;
				font-size: 1.1rem;
				&:first-child {
					margin-right: 0.5rem;
				}
			}

			div {
				display: flex;
			}

			h3 {
				margin-left: 0.5rem;
			}
		}

		.overview-title {
			font-size: 1.2rem;
			font-weight: 500;
			margin: 1rem 0;
		}

		.overview {
			font-size: 1.1rem;
			line-height: 1.5rem;
		}
	}
`;

export default Container;
