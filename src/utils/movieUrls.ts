import { NotFoundImage } from "../assets";

const src = process.env.REACT_APP_TMDB_IMAGE;

const imageUrl = (url: string, size = "w780") =>
	url ? `${src}/${size}${url}` : NotFoundImage;

const ogImageUrl = (url: string) =>
	url ? `${src}/original${url}` : NotFoundImage;

const embedMovieUrl = (id: number) =>
	`${process.env.REACT_APP_TMDB_VIDEO}/movie?id=${id}`;

// eslint-disable  import/no-anonymous-default-export
export default {
	imageUrl,
	embedMovieUrl,
	ogImageUrl,
};
