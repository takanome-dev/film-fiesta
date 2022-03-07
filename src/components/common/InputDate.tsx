import React from "react";
import styled from "styled-components";

type Props = {
	label: string;
	name: string;
	value: string;
	error: string;
	disabled: boolean;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	// onChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
};

const Container = styled.div`
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

	.error {
		margin-top: 0.5rem;
		font-size: 1rem;
		color: var(--color-primary);
	}
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
			<input
				id={name}
				name={name}
				{...rest}
				type="date"
				disabled={disabled}
				readOnly={name === "rentDate" ? true : false}
			/>
			{error && <div className="error">{error}</div>}
		</Container>
	);
};

export default InputDate;
