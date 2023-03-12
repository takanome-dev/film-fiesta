import { type OAuthProviderType } from 'next-auth/providers';
import { signIn } from 'next-auth/react';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { SiDiscord } from 'react-icons/si';

import InputWithError from '@/components/input-with-error';
import Meta from '@/components/meta';
import { Button } from '@/components/ui/button';
import SignInLayout from '@/layouts/signin-layout';
import { loginSchema } from '@/schemas/user';

import type { WithPageLayout } from '@/types/with-page-layout';

const LoginPage: WithPageLayout = () => {
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleOauthLogin = async (provider: OAuthProviderType) => {
    // TODO: create a custom component for toast
    if (provider === 'discord') {
      toast(
        'Sorry, we have temporarily disabled Discord login. Please use Google or GitHub.',
        {
          icon: (
            <AiOutlineInfoCircle className="mr-2 text-amber-500" size={40} />
          ),
          position: 'top-center',
          className:
            'border-l-4 border-amber-400 dark:bg-slate-800 dark:text-slate-100',
        }
      );
      return;
    }

    try {
      const options =
        provider === 'email' ? { callbackUrl: '/movies' } : undefined;
      await signIn(provider, options);
    } catch (err) {
      toast.error('Something went wrong. Please try again.');
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  // eslint-disable-next-line consistent-return
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = loginSchema.safeParse(email);
    if (!result.success) {
      return setError(result.error.message);
    }

    try {
      setError('');
      await signIn('email', { email, callbackUrl: '/movies' });
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
    }
  };

  return (
    <>
      <Meta page="Login" />
      <div className="w-3/4 rounded-lg border border-slate-300 bg-white/50 p-8 shadow-lg backdrop-blur-md dark:border-slate-200 dark:bg-slate-800 sm:w-[400px]">
        <h1 className="mb-6 text-center text-3xl font-bold text-slate-800 dark:text-slate-50">
          Login to your account
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <InputWithError
            name="email"
            type="email"
            label="Email"
            containerClassName="max-w-full"
            onChange={handleChange}
            value={email}
            error={error}
          />
          <Button className="mt-4">Sign in</Button>
        </form>
        <div className="relative mt-12 flex flex-col items-center">
          <div className="relative flex w-full justify-center">
            <div className="absolute top-1/2 left-0 block h-[1px] w-full bg-slate-300 dark:bg-slate-400" />
            <span className="z-50 bg-slate-50 px-2 text-center dark:bg-slate-800">
              or
            </span>
          </div>
          <div className="mt-4 flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-10 dark:hover:bg-slate-600"
              onClick={() => handleOauthLogin('google')}
            >
              <FcGoogle size={24} className="" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-10 dark:hover:bg-slate-600"
              onClick={() => handleOauthLogin('github')}
            >
              <FaGithub size={24} className="" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-10 dark:hover:bg-slate-600"
              onClick={() => handleOauthLogin('discord')}
            >
              <SiDiscord size={24} className="text-[#5865F2]" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

LoginPage.PageLayout = SignInLayout;
export default LoginPage;
