import React from "react";
import { GenreType } from "../../types/GenreType";

type Props = {
  label: string;
  name: string;
  options: GenreType[];
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
  error: string;
};

const Select: React.FC<Props> = ({ label, name, options, error, ...rest }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select id={name} name={name} className="form-select" {...rest}>
        <option value="" />
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
