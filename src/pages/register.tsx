import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { SiDiscord } from 'react-icons/si';
import { fromZodError } from 'zod-validation-error';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import useForm from '@/lib/hooks/useForm';
import { api } from '@/lib/utils/api';
import { registerSchema, type RegisterSchema } from '@/schemas/user';

const RegisterPage = () => {
  const [error, setError] = useState<string | null>(null);
  const { handleChange, inputs } = useForm<RegisterSchema>({
    name: '',
    email: '',
    password: '',
  });

  const router = useRouter();

  const { mutateAsync } = api.user.register.useMutation();

  // eslint-disable-next-line consistent-return
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: create a wrapper func for this
    const result = registerSchema.safeParse(inputs);

    if (!result.success) {
      const zodError = fromZodError(result.error).message.split(':')[1];
      return setError(zodError as string);
    }

    // TODO: create a wrapper func for this
    try {
      setError('');
      const response = await mutateAsync(inputs);
      console.log({ response });
      await router.push('/');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-movie-3 bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="w-3/4 rounded-lg bg-white bg-opacity-60 p-12 shadow backdrop-blur-md sm:w-[500px]">
        <h1 className="mb-4 text-center text-3xl font-bold text-slate-800">
          Register
        </h1>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form onSubmit={handleSubmit}>
          <Input
            id="name"
            type="text"
            onChange={handleChange}
            value={inputs.name}
          />
          <Input
            id="email"
            type="email"
            onChange={handleChange}
            value={inputs.email}
          />
          <Input
            id="password"
            onChange={handleChange}
            value={inputs.password}
          />
          <Button title="Sign up" type="submit" className="mt-4" />
        </form>
        <div className="mt-4 flex justify-between">
          <p className="font-medium">Already have an account?</p>
          <Link href="/login" className="font-medium hover:underline">
            Sign in
          </Link>
        </div>
        <div className="relative mt-4 flex flex-col items-center">
          <p className="font-medium text-slate-700">
            🛡 or you can sign up with 🛡
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

export default RegisterPage;
