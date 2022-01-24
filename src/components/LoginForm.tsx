import Joi from "joi";
import { logUser } from "../services/authService";
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
    try {
      const jwt = await logUser(this.state.data);
      localStorage.setItem("token", jwt);
      window.location.pathname = "/";
    } catch (err: any) {
      if (err.request?.status === 400) {
        const errors = this.state.errors;
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
