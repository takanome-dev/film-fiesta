import React from 'react';
import { MdError } from 'react-icons/md';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils/classname';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | null;
  containerClassName?: string;
}

const InputWithError: React.FC<Props> = (props) => {
  const { label, id, type, error, containerClassName } = props;

  return (
    <>
      <div
        className={cn(
          'grid w-full max-w-sm items-center gap-1.5',
          containerClassName
        )}
      >
        <Label htmlFor={id}>{label}</Label>
        <Input type={type} id={id} {...props} />
      </div>
      {error && (
        <div className="mt-2 flex items-center gap-2 rounded-md border-l-2 border-red-500 bg-white py-1 px-2 text-red-500 transition-all">
          <MdError size={16} />
          <p className="truncate text-sm font-normal">{error}</p>
        </div>
      )}
    </>
  );
};

export default InputWithError;
