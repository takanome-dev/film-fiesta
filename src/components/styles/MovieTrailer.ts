import styled from "styled-components";

const Container = styled.div`
	position: absolute;
	inset: 0;
	display: flex;
	justify-content: center;

	.wrapper {
		position: fixed;
		z-index: 4;
		max-height: calc(100vh - var(--header-height));
		/* height: 100%; */
		max-width: 40rem;
		width: 100%;
		background-color: #fff;
		border-radius: 0.8rem;
		box-shadow: 0 0 0.9rem rgba(0, 0, 0, 0.1);
		margin: 1rem 2rem;
		overflow-y: auto;

		.header {
			position: sticky;
			top: 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 1rem;
			box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.1);
			background-color: #fff;
			padding: 1rem;

			div {
				display: flex;
				align-items: center;

				p {
					font-size: 1.3rem;
					font-weight: bold;
					margin-left: 0.5rem;
				}
			}

			button {
				border: none;
				background: none;
				cursor: pointer;
			}
		}

		.content {
			overflow-y: auto;
			display: flex;
			flex-direction: column;
			margin: 1rem;
		}
	}
`;

export default Container;
