import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #fff;
	border-radius: 0.8rem;
	box-shadow: 0 0 0.9rem rgba(0, 0, 0, 0.1);
	margin: 2rem;

	.wrapper {
		padding: 2rem;
		.avatar {
			display: flex;
			align-items: center;
			flex-wrap: wrap;

			.user-avatar {
				min-width: 5rem;
				min-height: 5rem;
				border-radius: 50%;
				background-color: var(--color-primary-40);
			}

			.user-info {
				margin-left: 1rem;
				.name {
					font-size: 1.1rem;
					font-weight: 500;
				}
				.email {
					margin-top: 0.5rem;
					color: var(--color-dark-60);
					overflow-wrap: break-word;
				}

				@media (max-width: 396px) {
					margin-top: 1rem;
					margin-left: 0;
				}
			}
		}

		form {
			margin-top: 3rem;
			max-width: 70%;
			@media (max-width: 650px) {
				max-width: 100%;
			}
		}

		@media (max-width: 495px) {
			padding: 1rem;
		}
	}

	@media (max-width: 460px) {
		margin: 2rem auto;
	}
`;

export default Container;
