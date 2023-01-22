import { useState } from 'react';

export default function useForm<T extends Record<string, string>>(
  initial = {} as T
) {
  const [inputs, setInputs] = useState(initial);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const resetForm = () => setInputs(initial);

  const clearForm = () => {
    const clearState = Object.fromEntries(
      // eslint-disable-next-line no-unused-vars
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(clearState as T);
  };

  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
