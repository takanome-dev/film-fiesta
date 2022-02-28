import styled from "styled-components";

const Container = styled.div`
	.btn-2 {
		display: none;
		padding: 0.8rem;
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
					width: 5rem;
					height: 5rem;
					border: 0.1rem solid var(--color-gray-40);
					border-radius: 50%;
					overflow: hidden;
					img {
						/* border-radius: 50%; */
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
		margin-top: 2rem;
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
