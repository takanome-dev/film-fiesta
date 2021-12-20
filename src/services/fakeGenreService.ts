export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
  { _id: "5b21ca3eeb7f6fbccd47114", name: "Comedy" },
  { _id: "5b21ca3eeb7f6fbccd47120", name: "Thriller" },
];

export function getGenres() {
  return genres.filter((g) => g);
}
