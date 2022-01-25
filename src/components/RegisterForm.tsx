import Joi from "joi";
import { registerUser } from "../services/userService";
import Form from "./common/Form";
import { RegisterStateType } from "./types";

export default class RegisterForm extends Form {
  state: RegisterStateType = {
    data: {
      email: "",
      password: "",
      name: "",
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
    name: Joi.string().trim().min(5).max(50).required().label("Name"),
  };

  async submitToServer() {
    try {
      await registerUser(this.state.data);
      window.location.pathname = "/";
    } catch (err: any) {
      if (err.request?.status === 400) {
        const errors = this.state.errors;
        errors.email = err.data;
        this.setState({ errors });
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}
