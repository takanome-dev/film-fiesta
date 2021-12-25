import React, { Component } from "react";
import { LoginFormType } from "../types/LoginFormType";

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

    account["username"] = currentTarget.value;

    this.setState({ account });
  };

  render() {
    const { username, password } = this.state.account;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
    );
  }
}
