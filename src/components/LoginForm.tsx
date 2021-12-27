import React, { Component } from "react";
import { LoginFormType } from "./types";
import Input from "./common/Input";
import Joi from "joi";

export default class LoginForm extends Component<{}, LoginFormType> {
  state: Readonly<LoginFormType> = {
    account: {
      username: "",
      password: "",
    },
    errors: {},
  };

  schema: Record<string, any> = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  validate = () => {
    const errors: Record<string, any> = {};
    const { error } = Joi.object(this.schema).validate(this.state.account, {
      abortEarly: false,
    });

    if (!error) return null;

    for (const err of error?.details!) errors[err.path[0]] = err.message;

    return errors;
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    console.log("submitted");
  };

  validateProperty = ({ name, value }: EventTarget & HTMLInputElement) => {
    const field = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.object(schema).validate(field);
    return error ? error.details[0].message : null;
  };

  /**
   * @ref https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/
   */

  handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    currentTarget,
  }) => {
    const account = { ...this.state.account };
    const errors = { ...this.state.errors };

    const errorMessage = this.validateProperty(currentTarget);
    errorMessage
      ? (errors[currentTarget.name] = errorMessage)
      : delete errors[currentTarget.name];

    account[currentTarget.name] = currentTarget.value;

    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;

    const isDisabled = this.validate() === null ? false : true;

    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          label="Username"
          name="username"
          value={account.username}
          error={errors.username!}
          onChange={this.handleChange}
        />
        <Input
          label="Password"
          name="password"
          value={account.password}
          error={errors.password!}
          onChange={this.handleChange}
        />
        <button className="btn btn-primary" disabled={isDisabled}>
          Login
        </button>
      </form>
    );
  }
}
