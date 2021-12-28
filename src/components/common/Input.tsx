import React from "react";

type Props = {
  label: string;
  name: string;
  type: string;
  value: string;
  error: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Input: React.FC<Props> = ({ label, name, error, ...rest }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input className="form-control" id={name} name={name} {...rest} />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
