import LoginPage from './login';

export default LoginPage;

// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import { signIn } from 'next-auth/react';
// import React, { useState } from 'react';
// import { toast } from 'react-hot-toast';
// import { AiOutlineInfoCircle } from 'react-icons/ai';
// import { FaGithub } from 'react-icons/fa';
// import { FcGoogle } from 'react-icons/fc';
// import { SiDiscord } from 'react-icons/si';
// // import { fromZodError } from 'zod-validation-error';

// import InputWithError from '@/components/input-with-error';
// import Meta from '@/components/meta';
// import { Button } from '@/components/ui/button';
// import SignInLayout from '@/layouts/signin-layout';
// import useForm from '@/lib/hooks/useForm';
// // import { api } from '@/lib/utils/api';
// import { type RegisterSchema } from '@/schemas/user';

// import type { WithPageLayout } from '@/types/with-page-layout';
// import type { OAuthProviderType } from 'next-auth/providers';

// const RegisterPage: WithPageLayout = () => {
//   const [error, setError] = useState<string | null>(null);
//   const { handleChange, inputs } = useForm<RegisterSchema>({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const router = useRouter();

//   const handleOauthLogin = async (provider: OAuthProviderType) => {
//     if (provider === 'discord') {
//       toast(
//         'Sorry, we have temporarily disabled Discord login. Please use Google or GitHub.',
//         {
//           icon: (
//             <AiOutlineInfoCircle className="mr-2 text-amber-500" size={40} />
//           ),
//           position: 'top-center',
//           className:
//             'border-l-4 border-amber-400 dark:bg-slate-800 dark:text-slate-100',
//         }
//       );
//       return;
//     }

//     try {
//       await signIn(provider);
//       router.push('/movies').catch(console.error);
//     } catch (err) {
//       toast.error('Something went wrong. Please try again.');
//       if (err instanceof Error) {
//         setError(err.message);
//       }
//     }
//   };

//   // eslint-disable-next-line consistent-return
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     toast(
//       'Sorry, we have temporarily disabled credentials login. Please use Google or GitHub.',
//       {
//         icon: <AiOutlineInfoCircle className="mr-2 text-amber-500" size={40} />,
//         position: 'top-center',
//         className:
//           'border-l-4 border-amber-400 dark:bg-slate-800 dark:text-slate-100',
//       }
//     );

//     // TODO: create a wrapper func for this
//     // const result = registerSchema.safeParse(inputs);

//     // if (!result.success) {
//     //   const zodError = fromZodError(result.error).message.split(':')[1];
//     //   return setError(zodError as string);
//     // }

//     // TODO: create a wrapper func for this
//     // try {
//     //   setError('');
//     //   const response = await signIn('credentials', {
//     //     redirect: false,
//     //     email: inputs.email,
//     //     password: inputs.password,
//     //   });

//     //   console.log({ response });
//     //   await router.push('/history');
//     // } catch (err) {
//     //   if (err instanceof Error) {
//     //     setError(err.message);
//     //   }
//     // }
//   };

//   return (
//     <>
//       <Meta page="Register" />
//       <div className="w-3/4 rounded-lg border border-slate-300 bg-white/50 p-8 shadow-lg backdrop-blur-md dark:border-slate-200 dark:bg-slate-800 sm:w-[400px]">
//         <h1 className="mb-6 text-center text-3xl font-bold text-slate-800 dark:text-slate-50">
//           Create an account
//         </h1>
//         {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//           <InputWithError
//             name="name"
//             type="text"
//             label="Name"
//             containerClassName="max-w-full"
//             onChange={handleChange}
//             value={inputs.name}
//           />
//           <InputWithError
//             name="email"
//             type="email"
//             label="Email"
//             containerClassName="max-w-full"
//             onChange={handleChange}
//             value={inputs.email}
//           />
//           <InputWithError
//             name="password"
//             type="password"
//             label="Password"
//             containerClassName="max-w-full"
//             onChange={handleChange}
//             value={inputs.password}
//             error={error}
//           />
//           <Button className="mt-4">Sign up</Button>
//         </form>
//         <div className="mt-4 flex justify-between">
//           <p className="font-medium">Already have an account?</p>
//           <Link href="/login" className="font-medium hover:underline">
//             Sign in
//           </Link>
//         </div>
//         <div className="relative mt-4 flex flex-col items-center">
//           <div className="relative flex w-full justify-center">
//             <div className="absolute top-1/2 left-0 block h-[1px] w-full bg-slate-300 dark:bg-slate-400" />
//             <span className="z-50 bg-slate-50 px-2 text-center dark:bg-slate-800">
//               or
//             </span>
//           </div>
//           <div className="mt-4 flex gap-2">
//             <Button
//               variant="ghost"
//               size="sm"
//               className="h-10 dark:hover:bg-slate-600"
//               // eslint-disable-next-line @typescript-eslint/no-misused-promises
//               onClick={() => handleOauthLogin('google')}
//             >
//               <FcGoogle size={24} className="" />
//             </Button>
//             <Button
//               variant="ghost"
//               size="sm"
//               className="h-10 dark:hover:bg-slate-600"
//               // eslint-disable-next-line @typescript-eslint/no-misused-promises
//               onClick={() => handleOauthLogin('github')}
//             >
//               <FaGithub size={24} className="" />
//             </Button>
//             <Button
//               variant="ghost"
//               size="sm"
//               className="h-10 dark:hover:bg-slate-600"
//               // eslint-disable-next-line @typescript-eslint/no-misused-promises
//               onClick={() => handleOauthLogin('discord')}
//             >
//               <SiDiscord size={24} className="text-[#5865F2]" />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// RegisterPage.PageLayout = SignInLayout;
// export default RegisterPage;
