/* eslint-disable jsx-a11y/label-has-associated-control */
import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { SiDiscord } from 'react-icons/si';

const LoginPage = () => (
  <div className="relative flex min-h-screen flex-col items-center justify-center bg-netflix bg-cover bg-center bg-no-repeat">
    <div className="absolute inset-0 bg-black bg-opacity-50" />
    <div className="z-10 w-1/3 rounded-lg bg-white bg-opacity-60 p-12 shadow backdrop-blur-sm">
      <h1 className="mb-4 text-center text-3xl font-bold text-slate-800">
        Login
      </h1>
      <form>
        <div className="mb-4 flex flex-col">
          <label htmlFor="email" className="mb-2 font-medium text-slate-800">
            Email
          </label>
          <input
            className="rounded-md border border-slate-200 py-3 transition duration-300 ease-in-out hover:border-blue-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            id="email"
            name="email"
            type="email"
          />
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="password" className="mb-2 font-medium text-slate-800">
            Password
          </label>
          <input
            className="rounded-md border border-slate-200 py-3 transition duration-300 ease-in-out hover:border-blue-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            id="password"
            name="password"
            type="email"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-blue-500 py-3 font-semibold text-white hover:bg-blue-600"
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

export default LoginPage;
