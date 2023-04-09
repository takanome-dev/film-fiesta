export const imageUrl = (url: string, size = "w780") =>
  url ? `https://image.tmdb.org/t/p/${size}${url}` : "";

export const ogImageUrl = (url: string) =>
  url ? `https://image.tmdb.org/t/p/original${url}` : "";

export const embedMovieUrl = (id: number): string =>
  `https://www.2embed.to/embed/tmdb/movie?id=${id}`;
