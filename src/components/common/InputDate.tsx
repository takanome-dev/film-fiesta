import React from "react";
import styled from "styled-components";

type Props = {
	label: string;
	name: string;
	value: string;
	error: string;
	disabled: boolean;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Container = styled.div`
	position: relative;
	margin-top: 0.5rem;
	label {
		font-size: 1.1rem;
		margin-right: 1rem;
	}

	input {
		/* margin-left: 1rem; */
		color: var(--color-dark-80);
		background-color: var(--color-background);
		padding: 0.2rem 0.5rem;
		/* cursor: pointer; */
		border: none;
		border-radius: 0.6rem;
		transition: outline 100ms ease;
		&:focus {
			outline: 0.35rem solid var(--color-secondary-20);
		}
	}

	/* .error {
		position: absolute;
		top: 100%;
		z-index: 5;
	} */
`;

const InputDate: React.FC<Props> = ({
	label,
	name,
	error,
	disabled,
	...rest
}) => {
	return (
		<Container>
			<label htmlFor={name}>{label} :</label>
			<input id={name} name={name} {...rest} type="date" disabled={disabled} />
			{error && <p className="error">{error}</p>}
		</Container>
	);
};

export default InputDate;
