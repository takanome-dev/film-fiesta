import Joi from "joi";
import { logUser } from "../services/auth";
import Form from "./common/Form";
import { LoginStateType } from "./types";

export default class LoginForm extends Form {
	state: LoginStateType = {
		data: {
			email: "",
			password: "",
		},
		errors: {},
	};

	schema = {
		email: Joi.string()
			.email({ tlds: { allow: ["com"] } })
			.min(8)
			.max(50)
			.required()
			.label("Email"),
		password: Joi.string().min(8).max(50).required().label("Password"),
	};

	async submitToServer() {
		const { state } = this.props.location;

		try {
			await logUser(this.state.data);
			window.location.pathname = state ? state.from.pathname : "/";
		} catch (err: any) {
			if (err.request?.status === 400) {
				const errors = this.state.errors;
				// ! TODO: Review Error Message
				errors.email = err.data;
				errors.password = err.data;
				this.setState({ errors });
			}
		}
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h1>Login</h1>
				{this.renderInput("email", "Email")}
				{this.renderInput("password", "Password", "password")}
				{this.renderButton("Login")}
			</form>
		);
	}
}
