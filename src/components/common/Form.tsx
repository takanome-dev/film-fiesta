import React, { Component } from "react";
import Joi from "joi";
//* Components
import Input from "./Input";
import Select from "./Select";
//* Types
import { FormProps, FormType } from "../types";
import { GenreType } from "../../types/GenreType";

export default class Form extends Component<FormProps, FormType> {
  state: FormType = {
    data: {},
    errors: {},
  };

  schema: Record<string, any> = {};

  validate = () => {
    const errors: Record<string, any> = {};
    const { error } = Joi.object(this.schema).validate(this.state.data, {
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

    this.submitToServer();
  };

  submitToServer() {}

  validateProperty = ({
    name,
    value,
  }: EventTarget & (HTMLInputElement | HTMLSelectElement)) => {
    const input = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.object(schema).validate(input);
    return error ? error.details[0].message : null;
  };

  /**
   * @ref https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/
   */

  handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement> =
    ({ currentTarget }) => {
      const data = { ...this.state.data };
      const errors = { ...this.state.errors };

      const errorMessage = this.validateProperty(currentTarget);
      errorMessage
        ? (errors[currentTarget.name] = errorMessage)
        : delete errors[currentTarget.name];

      data[currentTarget.name] = currentTarget.value;

      this.setState({ data, errors });
    };

  renderInput(name: string, label: string, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        label={label}
        name={name}
        type={type}
        value={data[name]}
        error={errors[name]!}
        onChange={this.handleChange}
      />
    );
  }

  renderSelect(name: string, label: string, options: GenreType[]) {
    const { data, errors } = this.state;
    return (
      <Select
        label={label}
        name={name}
        options={options}
        value={data[name]}
        error={errors[name]!}
        onChange={this.handleChange}
      />
    );
  }

  renderButton(label: string) {
    const isDisabled = this.validate() === null ? false : true;
    return (
      <button className="btn btn-primary" disabled={isDisabled}>
        {label}
      </button>
    );
  }
}
