import React from 'react';
import { MdError } from 'react-icons/md';

interface Props {
  error: string | null;
}

// TODO: remove me
const ErrorMessage: React.FC<Props> = ({ error }) => {
  if (!error) return null;

  return (
    <div className="mt-2 flex items-center gap-2 rounded-md border-l-2 border-red-500 bg-white py-1 px-2 text-red-500 transition-all">
      <MdError size={16} />
      <p className="truncate text-sm font-normal">{error}</p>
    </div>
  );
};

export default ErrorMessage;
