import React from "react";

type Props = {
  label: string;
  name: string;
  value: string;
  error: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const Input: React.FC<Props> = ({ label, name, value, error, onChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        className="form-control"
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
