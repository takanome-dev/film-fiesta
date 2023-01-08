import { NotFoundImage } from "../assets";

const src = import.meta.env.VITE_TMDB_IMAGE;

const imageUrl = (url: string, size = "w780") =>
	url ? `${src}/${size}${url}` : NotFoundImage;

const ogImageUrl = (url: string) =>
	url ? `${src}/original${url}` : NotFoundImage;

const embedMovieUrl = (id: number): string  =>
	`${import.meta.env.VITE_TMDB_VIDEO}/movie?id=${id}`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	imageUrl,
	embedMovieUrl,
	ogImageUrl,
};
