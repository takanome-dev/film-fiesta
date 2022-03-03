import Joi from "joi";
import { Link } from "react-router-dom";
import Form from "../components/common/Form";
import Wrapper from "../components/common/Wrapper";
import { LoginStateType } from "../components/types";
import { logUser } from "../services/auth";

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
			.lowercase()
			.min(8)
			.max(50)
			.required()
			.label("Email"),
		password: Joi.string().min(8).max(50).required().label("Password"),
	};

	async submitToServer() {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		const { state } = this.props.location!;

		try {
			await logUser(this.state.data);
			window.location.pathname = state ? state.from.pathname : "/";
		} catch (err: any) {
			if (err.request?.status === 400) {
				const errors = this.state.errors;
				// ! TODO: Review Error Message
				errors.email = err.data;
				// errors.password = err.data;
				this.setState({ errors });
			}
		}
	}

	render() {
		return (
			<Wrapper width="25rem">
				<form onSubmit={this.handleSubmit} className="form">
					<h1>Login</h1>
					{this.renderInput("email", "Email", "johndoe@gmail.com")}
					{this.renderInput("password", "Password", "secret", "password")}
					{this.renderButton("Login")}
					<div className="more">
						<p>Don't have an account ?</p>
						<Link to="/register">Sign up</Link>
					</div>
				</form>
			</Wrapper>
		);
	}
}
