import Joi from "joi";
import Form from "./common/Form";

export default class RegisterForm extends Form {
  state = {
    data: {
      username: "",
      password: "",
      name: "",
    },
    errors: {},
  };

  // .email({ tlds: { allow: ["com"] } })
  schema = {
    username: Joi.string()
      .email({ tlds: { allow: ["com"] } })
      .min(8)
      .max(50)
      .required()
      .label("Username"),
    password: Joi.string().min(8).max(50).required().label("Password"),
    name: Joi.string().trim().min(5).max(50).required().label("Name"),
  };

  submitToServer(): void {
    console.log("Registered");
  }

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}
