import React from "react";
import Container from "../styles/Input.styled";

type Props = {
	label: string;
	name: string;
	type: string;
	placeholder?: string;
	value: string;
	error: string;
	onChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
};

const Input: React.FC<Props> = ({ label, name, error, ...rest }) => {
	return (
		<Container>
			<label htmlFor={name} className="label">
				{label}
			</label>
			<input className="input" id={name} name={name} {...rest} />
			{error && <div className="error">{error}</div>}
		</Container>
	);
};

export default Input;
