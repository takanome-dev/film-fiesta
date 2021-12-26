import React, { Component } from "react";
import { LoginFormType } from "../types/LoginFormType";
import Input from "./common/Input";

export default class LoginForm extends Component<{}, LoginFormType> {
  state: Readonly<LoginFormType> = {
    account: {
      username: "",
      password: "",
    },
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("submitted");
  };

  handleChange = ({ currentTarget }: React.FormEvent<HTMLInputElement>) => {
    const account = { ...this.state.account };

    account[currentTarget.name] = currentTarget.value;

    this.setState({ account });
  };

  render() {
    const { username, password } = this.state.account;

    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          name="username"
          label="Username"
          value={username}
          onChange={this.handleChange}
        />
        <Input
          name="password"
          label="Password"
          value={password}
          onChange={this.handleChange}
        />
        <button className="btn btn-primary">Login</button>
      </form>
    );
  }
}
