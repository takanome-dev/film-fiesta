import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #fff;
	border-radius: 0.8rem;
	box-shadow: 0 0 0.9rem rgba(0, 0, 0, 0.1);
	margin: 2rem;
	padding: 2rem;

	.btn-2 {
		display: none;
	}

	.profile-wrapper {
		border: 1px solid var(--color-gray-20);
		border-radius: 0.8rem;
		padding: 1rem 2rem;

		.edit {
			display: none;
		}

		.avatar-container {
			display: flex;
			justify-content: space-between;
			align-items: center;

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
				}
			}
		}

		fieldset {
			margin-top: 1rem;
			border: none;

			.input-container {
				display: flex;
				flex-direction: column;
				margin-bottom: 1.2rem;
				width: 100%;
			}
		}
	}

	.password-wrapper {
		display: flex;
		flex-direction: column;
		margin-top: 1rem;
		border: 1px solid var(--color-gray-20);
		border-radius: 0.8rem;
		padding: 1rem 2rem;

		.password-label {
			display: flex;
			justify-content: space-between;
			align-items: center;
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
		padding: 0.8rem 1rem;
		color: var(--color-dark-80);
		background-color: var(--color-background);
		border: none;
		border-radius: 0.6rem;
		transition: outline 100ms ease;
		&:focus {
			outline: 0.35rem solid var(--color-secondary-20);
		}
	}
	label {
		font-size: 1.1rem;
		margin-bottom: 0.5rem;
	}

	.secondary {
		background-color: #fff;
		border: 1px solid var(--color-gray-40);
		cursor: pointer;
		&:hover {
			background-color: var(--color-gray-20);
		}
	}

	@media (max-width: 580px) {
		margin: 2rem auto;
		padding: 1rem;
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
