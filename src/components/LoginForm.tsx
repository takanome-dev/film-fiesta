import Joi from "joi";
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

  submitToServer() {
    //* Call the server
    console.log("submitted");
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
