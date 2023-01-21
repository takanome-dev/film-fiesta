import clsx from 'clsx';
import React from 'react';

import ErrorMessage from './ErrorMessage';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: string | null;
}

const Input: React.FC<Props> = (props) => {
  const { label, id, type, className, error } = props;

  return (
    <div className="mb-2 flex flex-col">
      <label htmlFor={id} className="mb-1 font-medium text-slate-800">
        {label}
      </label>
      <input
        {...props}
        id={id}
        name={id}
        type={type}
        className={clsx(
          'rounded-md border border-slate-200 py-3 transition duration-300 ease-in-out',
          'hover:border-blue-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400',
          className
        )}
      />
      <ErrorMessage error={error} />
    </div>
  );
};

export default Input;
