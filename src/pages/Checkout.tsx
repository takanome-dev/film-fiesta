/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { CardElement } from "@stripe/react-stripe-js";
import { StripeCardElementChangeEvent } from "@stripe/stripe-js";
import Joi from "joi";
import { toast } from "react-toastify";
import Button from "../components/common/Button";
import Form from "../components/common/Form";
import Wrapper from "../components/common/Wrapper";
import Container from "../components/styles/Checkout.styled";
import { Loader } from "../components/svg";
import { getCurrentUser } from "../services/auth";
import { getMovie } from "../services/movie";
import { getClientSecret } from "../services/payment";
import { createRental } from "../services/rental";
import { formatMoney } from "../utils/formatMoney";
import { numberOfDays } from "../utils/numberOfDays";

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
			name: "",
			email: "",
		},
		movie: { url: "", title: "", dailyRentalRate: 0 },
		complete: false,
		isProcessing: false,
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
		const { movieId, history } = this.props;
		const { name, email } = this.state.data;
		const { errors } = this.state;
		const user = getCurrentUser();
		if (name !== user?.name) {
			errors.name = "Name is invalid";
		}
		if (email !== user?.email) {
			errors.email = "Email is invalid";
		}

		this.setState({ errors });
		if (errors.name || errors.email) return;
		this.setState({ isProcessing: true });

		try {
			const userInfo = {
				userId: user!._id!,
				movieId: movieId!,
				returnedDate: this.state.data.returnedDate,
			};

			const clientSecret = await getClientSecret(userInfo);

			const cardElement = this.props.elements?.getElement(CardElement);
			const { stripe } = this.props;

			const { error: paymentMethodError, paymentMethod } =
				await stripe!.createPaymentMethod({
					type: "card",
					card: cardElement!,
					billing_details: {
						name: this.state.data.name,
						email: this.state.data.email,
					},
				});

			if (paymentMethodError)
				return (
					toast.error(paymentMethodError.message) &&
					this.setState({ isProcessing: false })
				);

			const { error: confirmationError, paymentIntent } =
				await stripe!.confirmCardPayment(clientSecret, {
					payment_method: paymentMethod?.id,
				});

			if (confirmationError)
				return (
					toast.error(confirmationError.message) &&
					this.setState({ isProcessing: false })
				);

			const data = await createRental({
				userId: user!._id!,
				movieId: movieId!,
				returnedDate: this.state.data.returnedDate,
				paymentIntentId: paymentIntent?.id,
			});
			toast.success(data);
			this.props.onRefetchRentals?.();
			return history?.replace("/rentals");
		} catch (err: any) {
			console.log({ err });
			toast.error(err.data);
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

		const { complete, errors, movie, isProcessing, data } = this.state;
		const isDisabled =
			this.validate() === null && complete && !isProcessing ? false : true;

		let totalPrice: number;
		const days = numberOfDays(new Date(data.returnedDate), new Date());
		data.returnedDate
			? (totalPrice = days * movie.dailyRentalRate)
			: (totalPrice = movie.dailyRentalRate);

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
									style={{ aspectRatio: "16/9" }}
								/>
							</div>
							<div className="order-details">
								<p className="movie-title">
									Movie: <span>{movie?.title}</span>
								</p>
								<p className="movie-price">
									Price : <span>${movie?.dailyRentalRate} / day</span>
								</p>
								{this.renderInputDate("rentDate", "Rent Date", true)}
								{this.renderInputDate("returnedDate", "Returned Date", false)}
								<div className="total">
									<p>Total</p>
									<p>{formatMoney(totalPrice)}</p>
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
									{errors.cardError && (
										<p className="error">{errors.cardError}</p>
									)}
								</div>
								<p className="info">
									! Use 4242-4242-4242-4242 as test credit card number 💳
								</p>
								<Button classes="btn" isDisabled={isDisabled}>
									{isProcessing ? (
										<Loader size={24} />
									) : (
										`Pay ${formatMoney(totalPrice)}`
									)}
								</Button>
							</div>
						</div>
					</form>
				</Container>
			</Wrapper>
		);
	}
}
