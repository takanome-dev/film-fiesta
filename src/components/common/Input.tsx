import React from "react";

type Props = {
  name: string;
  label: string;
  value: string;
  onChange: ({ currentTarget }: React.FormEvent<HTMLInputElement>) => void;
};

const Input: React.FC<Props> = ({ name, label, value, onChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        type="text"
        className="form-control"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
