import clsx from 'clsx';
import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  title: string;
}

const Button: React.FC<Props> = ({
  loading = false,
  title,
  type = 'button',
  className,
}) => (
  <button
    type={type}
    disabled={loading}
    className={clsx(
      'w-full rounded-md py-3 font-semibold text-white',
      'bg-blue-500 hover:bg-blue-600 disabled:pointer-events-none disabled:opacity-50',
      className
    )}
  >
    {title}
  </button>
);

export default Button;
