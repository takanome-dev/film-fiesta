import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const registerSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8),
});

export const userSchema = z.object({
  email: z.string().email(),
  id: z.string(),
  image: z.string().nullable(),
  name: z.string(),
  createdAt: z.string(),
});

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
export type UserSchema = z.infer<typeof userSchema>;
