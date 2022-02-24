import Joi, { PartialSchemaMap } from "joi";
import React, { Component } from "react";
import { GenreType } from "../../types/GenreType";
import { FormProps, FormStateType } from "../types";
import Button from "./Button";
import Input from "./Input";
import Select from "./Select";
import TextArea from "./TextArea";

export default class Form extends Component<FormProps, FormStateType> {
	state: FormStateType = {
		data: {},
		errors: {},
	};

	schema: PartialSchemaMap = {};

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
		this.setState({ errors: errors || {} });
		if (errors) return;

		this.submitToServer();
	};

	submitToServer() {
		//
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
	 * @ref https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/
	 */

	handleChange: React.ChangeEventHandler<
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

	renderTextArea(
		name: string,
		label: string,
		placeholder: string,
	) {
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

	renderSelect(name: string, label: string, options: GenreType[]) {
		const { data, errors } = this.state;
		return (
			<Select
				label={label}
				name={name}
				options={options}
				value={data[name]}
				error={errors[name]}
				onChange={this.handleChange}
			/>
		);
	}

	renderButton(label: string) {
		const isDisabled = this.validate() === null ? false : true;
		return (
			<Button classes="btn" isDisabled={isDisabled}>
				{label}
			</Button>
		);
	}
}
