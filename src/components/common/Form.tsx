import Joi, { PartialSchemaMap } from "joi";
import React, { Component } from "react";
import Loader from "../common/Loader";
import * as types from "../types";
import Button from "./Button";
import Input from "./Input";
import InputDate from "./InputDate";
import TextArea from "./TextArea";

export default class Form extends Component<types.FormProps, types.FormState> {
	state: types.FormState = {
		data: {},
		errors: {},
		isProcessing: false,
	};

	schema: PartialSchemaMap = {};

	date = {
		today: new Date().toISOString().substring(0, 10),
		nextDay: new Date().setDate(new Date().getDate() + 1),
	};

	validate = () => {
		const errors: Record<string, string> = {};
		const { error } = Joi.object(this.schema).validate(this.state.data, {
			abortEarly: false,
		});

		if (!error) return null;

		for (const err of error.details) errors[err.path[0]] = err.message;

		return errors;
	};

	handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const errors = this.validate();
		if (errors) return this.setState({ errors: errors || {} });

		this.setState({ isProcessing: true });

		this.submitToServer();
	};

	submitToServer(): void  {
		// Do something
	}

	validateProperty = ({
		name,
		value,
	}: EventTarget &
		(HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement)) => {
		const input = { [name]: value };
		const schema = { [name]: this.schema[name] };
		const { error } = Joi.object(schema).validate(input);
		return error ? error.details[0].message : null;
	};

	/**
	 * @see {@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/}
	 */

	handleChange: React.FormEventHandler<
		HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
	> = ({ currentTarget }) => {
		const data = { ...this.state.data };
		const errors = { ...this.state.errors };

		const errorMessage = this.validateProperty(currentTarget);
		errorMessage
			? (errors[currentTarget.name] = errorMessage)
			: delete errors[currentTarget.name];

		data[currentTarget.name] = currentTarget.value;

		this.setState({ data, errors });
	};

	renderInput(name: string, label: string, placeholder: string, type = "text") {
		const { data, errors } = this.state;
		return (
			<Input
				label={label}
				name={name}
				placeholder={placeholder}
				type={type}
				value={data[name]}
				error={errors[name]}
				onChange={this.handleChange}
			/>
		);
	}

	renderInputDate(name: string, label: string, disabled: boolean) {
		const { data, errors } = this.state;
		let value: string;
		if (name === "rentDate") value = this.date.today;
		else value = data[name];

		return (
			<InputDate
				label={label}
				name={name}
				value={value}
				error={errors[name]}
				disabled={disabled}
				onChange={this.handleChange}
			/>
		);
	}

	renderTextArea(name: string, label: string, placeholder: string) {
		const { data, errors } = this.state;
		return (
			<TextArea
				label={label}
				name={name}
				placeholder={placeholder}
				value={data[name]}
				error={errors[name]}
				onChange={this.handleChange}
			/>
		);
	}

	renderButton(label: string) {
		const isDisabled =
			this.validate() === null && !this.state.isProcessing ? false : true;
		return (
			<Button classes="btn" isDisabled={isDisabled}>
				{this.state.isProcessing ? <Loader size={24} /> : label}
			</Button>
		);
	}
}
