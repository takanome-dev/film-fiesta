/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { CardElement } from "@stripe/react-stripe-js";
import { StripeCardElementChangeEvent } from "@stripe/stripe-js";
import Joi from "joi";
import { toast } from "react-toastify";
import styled from "styled-components";
import Button from "../components/common/Button";
import Form from "../components/common/Form";
import Wrapper from "../components/common/Wrapper";
import { getCurrentUser } from "../services/auth";
import { getMovie } from "../services/movie";
import { getPaymentIntent } from "../services/payment";

const Container = styled.div`
	form {
		display: grid;
		grid-template-columns: 0.7fr 1fr;
		column-gap: 5rem;

		.title {
			font-size: 1.5rem;
			font-weight: 500;
			margin: -1rem 0 1rem;
			text-align: center;
			text-decoration: underline;
			text-decoration-style: double;
		}

		.order {
			.order-img {
				margin-bottom: 1rem;

				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
					border-radius: 0.8rem;
					box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
				}
			}

			.order-details {
				/* display: flex;
			justify-content: center;
			flex-direction: column; */

				/* .movie-title {
				font-size: 1.5rem;
				font-weight: 500;
			}

			.movie-price {
				font-size: 1.2rem;
				font-weight: 500;
			} */
				p {
					font-size: 1.1rem;
					/* font-weight: 500; */
					margin-top: 0.5rem;
					span {
						margin-left: 1rem;
						/* font-size: 1.5rem; */
					}
				}

				.total {
					display: flex;
					justify-content: space-between;
					align-items: center;
					border-top: 0.1rem solid var(--color-gray-40);
					margin-top: 1rem;
				}
			}
		}

		.payment {
			.wrapper {
				margin-top: 2rem;
				.label {
					font-size: 1.1rem;
				}

				.input-card {
					margin: 0.5rem 0 1rem;
					padding: 0.8rem 1rem;
					background-color: var(--color-background);
					border: none;
					border-radius: 0.6rem;
					transition: outline 100ms ease;
					&:focus {
						outline: 0.35rem solid var(--color-secondary-20);
					}
				}

				.error {
					margin-top: 0.5rem;
					font-size: 1rem;
					color: var(--color-primary);
				}
			}
		}
	}
`;

export default class Checkout extends Form {
	state = {
		data: {
			name: "",
			email: "",
			returnedDate: "",
		},
		errors: {
			returnedDate: "",
			cardError: "",
		},
		movie: { url: "", title: "", dailyRentalRate: 0 },
		complete: false,
	};

	schema = {
		email: Joi.string()
			.email({ tlds: { allow: ["com"] } })
			.lowercase()
			.min(8)
			.max(50)
			.required()
			.label("Email"),
		name: Joi.string().trim().min(5).max(50).required().label("Name"),
		returnedDate: Joi.date()
			.min(new Date(this.date.nextDay).toISOString().substring(0, 10))
			.required()
			.label("Returned date"),
	};

	async componentDidMount() {
		const user = getCurrentUser();
		const movie = await getMovie(this.props.movieId!);
		this.setState({ movie, data: { name: user?.name, email: user?.email } });
	}

	handleCardDetailsChange = (e: StripeCardElementChangeEvent) => {
		const errorMessage = e.error?.message;

		e.error
			? this.setState({ errors: { cardError: errorMessage } })
			: this.setState({ errors: { cardError: "" } });

		e.complete
			? this.setState({ complete: true })
			: this.setState({ complete: false });
	};

	async submitToServer() {
		try {
			const user = getCurrentUser();
			const paymentIntent = {
				userId: user!._id!,
				movieId: this.props.movieId!,
				returnedDate: this.state.data.returnedDate,
			};
			const clientSecret = await getPaymentIntent(paymentIntent);

			const cardElement = this.props.elements?.getElement(CardElement);
			const stripe = this.props.stripe;

			const paymentMethod = await stripe?.createPaymentMethod({
				type: "card",
				card: cardElement!,
				billing_details: {
					name: this.state.data.name,
					email: this.state.data.email,
				},
			});

			const confirmedPayment = await stripe?.confirmCardPayment(clientSecret, {
				payment_method: paymentMethod?.paymentMethod?.id,
			});

			if (confirmedPayment?.paymentIntent?.status === "succeeded") {
				return toast.success("Movie successfully rented");
			}
		} catch (err: any) {
			toast.error(err.message);
		}
	}

	render() {
		const cardElementsOptions = {
			style: {
				base: {
					color: "rgba(43, 45, 66, 0.8)",
					"::placeholder": {
						color: "#8D99AE",
					},
					fontFamily: "'Montserrat', sans-serif",
					fontSize: "16px",
				},
				invalid: {
					color: "#EF233C",
					iconColor: "#EF233C",
				},
			},
			hidePostalCode: true,
		};

		const { complete, errors, movie } = this.state;
		const isDisabled = this.validate() === null && complete ? false : true;
		// const diff = numberOfDays(new Date(this.date.nextDay), new Date());
		// console.log({ diff });
		return (
			<Wrapper width="100%">
				<Container>
					<form onSubmit={this.handleSubmit}>
						<div className="order">
							<p className="title">Order :</p>
							<div className="order-img">
								<img
									src={movie?.url}
									alt={movie?.title}
									style={{ aspectRatio: "4/3" }}
								/>
							</div>
							<div className="order-details">
								<p className="movie-title">
									Movie: <span>{movie?.title}</span>
								</p>
								<p className="movie-price">
									Price : <span>${movie?.dailyRentalRate} / day</span>
								</p>
								{this.renderInputDate("rentDate", "Rent Day", true)}
								{this.renderInputDate("returnedDate", "Rent Day", false)}
								<div className="total">
									<p>Total</p>
									<p>$2</p>
								</div>
							</div>
						</div>
						<div className="payment">
							<p className="title">Payment :</p>
							<div className="wrapper">
								{this.renderInput("name", "Name", "")}
								{this.renderInput("email", "Email", "")}
								<label htmlFor="credit-card">Credit Card</label>
								<div className="input-card" tabIndex={0}>
									<CardElement
										id="credit-card"
										options={cardElementsOptions}
										onChange={this.handleCardDetailsChange}
									/>
								</div>
								{errors.cardError && (
									<p className="error">{errors.cardError}</p>
								)}
								{/* {this.renderButton("Checkout")} */}
								<Button classes="btn" isDisabled={isDisabled}>
									Checkout
								</Button>
							</div>
						</div>
					</form>
				</Container>
			</Wrapper>
		);
	}
}
