import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { SiDiscord } from 'react-icons/si';
import { fromZodError } from 'zod-validation-error';

import Input from '@/components/Input';
import useForm from '@/hooks/useForm';
import { loginSchema, type LoginSchema } from '@/schemas/user';
import { api } from '@/utils/api';

const LoginPage = () => {
  const [inputError, setInputError] = React.useState<string | null>(null);
  const { handleChange, inputs } = useForm<LoginSchema>({
    email: '',
    password: '',
  });

  const { mutateAsync, error, isLoading } = api.user.login.useMutation();
  console.log({ error });

  // eslint-disable-next-line consistent-return
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: create a wrapper func for this
    const result = loginSchema.safeParse(inputs);

    if (!result.success) {
      const err = fromZodError(result.error).message.split(':')[1];
      return setInputError(err as string);
    }

    setInputError('');
    const response = await mutateAsync(inputs);
    console.log({ response });
    // router.push('/what-ever');
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-netflix bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="z-10 w-1/3 rounded-lg bg-white bg-opacity-60 p-12 shadow backdrop-blur-sm">
        <h1 className="mb-4 text-center text-3xl font-bold text-slate-800">
          Login
        </h1>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form onSubmit={handleSubmit}>
          <Input
            label="Email"
            id="email"
            type="email"
            onChange={handleChange}
            value={inputs.email}
          />
          {error && <p className="mt-2 text-red-700">{error.message}</p>}
          {inputError && <p className="mt-2 text-red-700">{inputError}</p>}
          <Input
            id="password"
            label="Password"
            type="password"
            onChange={handleChange}
            value={inputs.password}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-md bg-blue-500 py-3 font-semibold text-white hover:bg-blue-600 disabled:pointer-events-none disabled:opacity-50"
          >
            Signin
          </button>
        </form>
        <div className="mt-4 flex justify-between">
          <Link href="/reset-password" className="font-medium hover:underline">
            Forgot password?
          </Link>
          <Link href="/signup" className="font-medium hover:underline">
            Sign up
          </Link>
        </div>
        <div className="relative mt-4 flex flex-col items-center">
          <p className="px-4 font-medium text-slate-700">
            🛡 or you can sign in with 🛡
          </p>
          <div className="mt-4 flex gap-6">
            <FcGoogle
              size={30}
              className="cursor-pointer focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              tabIndex={0}
            />
            <FaGithub
              size={30}
              className="cursor-pointer focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              tabIndex={0}
            />
            <SiDiscord
              size={30}
              className="cursor-pointer text-[#5865F2] focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              tabIndex={0}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
