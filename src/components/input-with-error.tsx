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

const InputWithError = React.forwardRef<HTMLInputElement, Props>(
  (props, ref) => {
    const { label, name, type, error, containerClassName, ...rest } = props;

    return (
      <>
        <div
          className={cn(
            'grid w-full max-w-sm items-center gap-1.5',
            containerClassName
          )}
        >
          <Label htmlFor={name} className="mb-2">
            {label}
          </Label>
          <Input type={type} id={name} name={name} {...rest} ref={ref} />
        </div>
        {error && (
          <div className="mt-2 flex items-center gap-2 rounded-md border-l-2 border-red-500 bg-white py-1 px-2 text-red-500 transition-all">
            <MdError size={16} />
            <p className="truncate text-sm font-normal">{error}</p>
          </div>
        )}
      </>
    );
  }
);

export default InputWithError;
