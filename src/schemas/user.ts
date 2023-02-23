import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email(),
  // password: z.string().min(8),
});

export const registerSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
});

export const userSchema = z
  .object({
    id: z.string(),
    email: z.string().email(),
    name: z.string(),
    image: z.string().nullable(),
    isAdmin: z.boolean().nullable(),
    createdAt: z.string(),
  })
  .optional();

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
export type UserSchema = z.infer<typeof userSchema>;
