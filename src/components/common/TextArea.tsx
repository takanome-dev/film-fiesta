import React from "react";
import Container from "../styles/TextArea.styled";

type Props = {
	label: string;
	name: string;
	placeholder: string;
	value: string;
	error: string;
	onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
};

const TextArea: React.FC<Props> = ({ label, name, error, ...rest }) => {
	return (
		<Container>
			<label htmlFor={name}>{label}</label>
			<textarea id={name} name={name} {...rest} />
			{error && <div className="error">{error}</div>}
		</Container>
	);
};

export default TextArea;
