import Joi from "joi";
import Form from "./common/Form";

export default class LoginForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    username: Joi.string()
      .email({ tlds: { allow: ["com"] } })
      .min(8)
      .max(50)
      .required()
      .label("Username"),
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
        {this.renderInput("username", "Username")}
        {this.renderInput("password", "Password", "password")}
        {this.renderButton("Login")}
      </form>
    );
  }
}
