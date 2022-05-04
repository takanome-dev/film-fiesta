import styled from "styled-components";

const Container = styled.div`
	padding-bottom: 2rem;

	.btn-2 {
		display: none;
		padding: 0.8rem;
	}

	.profile-wrapper {
		border: 1px solid var(--gray-20);
		border-radius: 0.8rem;
		padding: 1rem 2rem;

		.edit {
			display: none;
		}

		.avatar-container {
			align-items: center;
			display: flex;
			justify-content: space-between;

			.avatar {
				align-items: center;
				display: flex;
				flex-wrap: wrap;

				.user-avatar {
					border: 0.1rem solid var(--gray-40);
					border-radius: 50%;
					height: 5rem;
					overflow: hidden;
					width: 5rem;

					img {
						max-width: 100%;
						object-fit: cover;
					}
				}

				.user-info {
					margin-left: 1rem;
					.name {
						font-size: 1.1rem;
						font-weight: 500;
					}
					.email {
						color: var(--dark-60);
						margin-top: 0.5rem;
						overflow-wrap: break-word;
					}
				}
			}
		}

		fieldset {
			border: none;
			margin-top: 1rem;

			.input-container {
				display: flex;
				flex-direction: column;
				margin-bottom: 1.2rem;
				width: 100%;
			}
		}
	}

	.password-wrapper {
		border: 1px solid var(--gray-20);
		border-radius: 0.8rem;
		display: flex;
		flex-direction: column;
		margin-top: 2rem;
		padding: 1rem 2rem;

		.password-label {
			align-items: center;
			display: flex;
			justify-content: space-between;
			margin-bottom: 1rem;

			p {
				font-size: 1.1rem;
			}
		}

		input {
			margin-bottom: 1rem;
		}
	}

	input {
		background-color: var(--background);
		border: none;
		border-radius: 0.6rem;
		color: var(--dark-80);
		padding: 0.8rem 1rem;
		transition: outline 100ms ease;
		&:focus {
			outline: 0.35rem solid var(--secondary-20);
		}
	}
	label {
		font-size: 1.1rem;
		margin-bottom: 0.5rem;
	}

	.secondary {
		background-color: #fff;
		border: 1px solid var(--gray-40);
		cursor: pointer;
		&:hover {
			background-color: var(--gray-20);
		}
	}

	@media (max-width: 580px) {
		.profile-wrapper,
		.password-wrapper {
			padding: 1rem;
		}
	}

	@media (max-width: 460px) {
		.btn-1 {
			display: none;
		}

		.btn-2 {
			display: initial;
			width: 100%;
		}
	}

	@media (max-width: 350px) {
		.profile-wrapper {
			.avatar-container {
				.avatar {
					.user-info {
						margin-left: 0;
						margin-top: 1rem;
					}
				}
			}
		}
		input {
			width: 100%;
		}
	}
`;

export default Container;
