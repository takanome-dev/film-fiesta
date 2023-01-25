// import { NotFoundImage } from "../assets";

import { env } from '@/env/client.mjs';

// TODO: add envs to the env folder and validate them
const src = env.NEXT_PUBLIC_TMDB_IMAGE;

// TODO: use a fallback image if the url is not found
export const imageUrl = (url: string, size = 'w780') =>
  url ? `${src}/${size}${url}` : '';

export const ogImageUrl = (url: string) => (url ? `${src}/original${url}` : '');

export const embedMovieUrl = (id: number): string =>
  `${env.NEXT_PUBLIC_TMDB_VIDEO}/movie?id=${id}`;
