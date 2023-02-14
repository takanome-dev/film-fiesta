import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { SiDiscord } from 'react-icons/si';
import { fromZodError } from 'zod-validation-error';

import InputWithError from '@/components/input-with-error';
import { Button } from '@/components/ui/button';
import SignInLayout from '@/layouts/signin-layout';
import useForm from '@/lib/hooks/useForm';
import { api } from '@/lib/utils/api';
import { loginSchema, type LoginSchema } from '@/schemas/user';

import type { WithPageLayout } from '@/types/with-page-layout';

const LoginPage: WithPageLayout = () => {
  const [error, setError] = useState<string | null>(null);
  const { handleChange, inputs } = useForm<LoginSchema>({
    email: '',
    password: '',
  });

  const router = useRouter();

  const { mutateAsync } = api.user.login.useMutation();

  // eslint-disable-next-line consistent-return
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // TODO: create a wrapper func for this
    const result = loginSchema.safeParse(inputs);

    if (!result.success) {
      const zodError = fromZodError(result.error).message.split(':')[1];
      return setError(zodError as string);
    }

    // TODO: create a wrapper func for this
    try {
      setError('');
      // const response = await mutateAsync(inputs);
      // console.log({ response });
      console.log('Sent login request...');
      // await router.push('/');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  // TODO: form input not working
  return (
    <div className="w-3/4 rounded-lg border border-slate-700 bg-white/50 p-8 shadow-lg backdrop-blur-md dark:border-slate-200 dark:bg-slate-800 sm:w-[400px]">
      <h1 className="mb-6 text-center text-3xl font-bold text-slate-800 dark:text-slate-50">
        Create an account
      </h1>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <InputWithError
          label="Email"
          id="email"
          type="email"
          containerClassName="max-w-full"
          onChange={handleChange}
          value={inputs.email}
        />
        <InputWithError
          id="password"
          label="Password"
          type="password"
          containerClassName="max-w-full"
          onChange={handleChange}
          value={inputs.password}
          error={error}
        />
        <Button className="mt-4">Sign in</Button>
      </form>
      <div className="mt-8 flex justify-between">
        {/* TODO: remove this */}
        <Link href="/reset-password" className="font-medium hover:underline">
          Forgot password?
        </Link>
        <Link href="/register" className="font-medium hover:underline">
          Sign up
        </Link>
      </div>
      <div className="relative mt-4 flex flex-col items-center">
        <div className="relative flex w-full justify-center">
          <div className="absolute top-1/2 left-0 block h-[1px] w-full bg-slate-700 dark:bg-slate-400" />
          <span className="z-50 bg-slate-50 px-2 text-center dark:bg-slate-800">
            or
          </span>
        </div>
        <div className="mt-4 flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="h-10 dark:hover:bg-slate-600"
          >
            <FcGoogle size={24} className="" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-10 dark:hover:bg-slate-600"
          >
            <FaGithub size={24} className="" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="h-10 dark:hover:bg-slate-600"
          >
            <SiDiscord size={24} className="text-[#5865F2]" />
          </Button>
        </div>
      </div>
      <div className="mt-4 flex flex-col items-center">
        <div className="relative flex w-full justify-center">
          <div className="absolute top-1/2 left-0 block h-[1px] w-full bg-slate-700 dark:bg-slate-400" />
          <span className="z-50 bg-slate-50 px-2 text-center dark:bg-slate-800">
            or
          </span>
        </div>
        <Link href="/magic-link" className="mt-4 font-medium hover:underline">
          🪄 &nbsp; Use a Magic Link &nbsp; 🪄
        </Link>
      </div>
    </div>
  );
};

LoginPage.PageLayout = SignInLayout;
export default LoginPage;

// eslint-disable-next-line no-lone-blocks
{
  //   <p className="relative block w-full text-center font-medium after:absolute after:top-1/2 after:left-0 after:h-[1px] after:w-full after:bg-slate-700 after:content-[''] dark:bg-transparent after:dark:bg-slate-50">
  //   <span className="bg-transparent px-2">or</span>
  // </p>
  /* <div className="relative flex min-h-screen flex-col items-center justify-center bg-movie-2 bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="w-3/4 rounded-lg bg-white bg-opacity-60 p-12 shadow backdrop-blur-sm sm:w-[500px]">
        <h1 className="mb-4 text-center text-3xl font-bold text-slate-800">
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          <Input
            label="Email"
            id="email"
            type="email"
            onChange={handleChange}
            value={inputs.email}
            error={null}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            onChange={handleChange}
            value={inputs.password}
            error={error}
          />
          <Button title="Sign in" type="submit" className="mt-4" />
        </form>
        <div className="mt-4 flex justify-between">
          <Link href="/reset-password" className="font-medium hover:underline">
            Forgot password?
          </Link>
          <Link href="/register" className="font-medium hover:underline">
            Sign up
          </Link>
        </div>
        <div className="relative mt-4 flex flex-col items-center">
          <p className="font-medium text-slate-700">
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
        <div className="mt-4 flex flex-col items-center">
          <p className="mb-2 font-medium text-slate-700">🛡 or 🛡</p>
          <Link href="/magic-link" className="font-medium hover:underline">
            🪄 Use a Magic Link 🪄
          </Link>
        </div>
      </div>
    </div> */
}
