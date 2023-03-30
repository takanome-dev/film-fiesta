import { Image, SafeAreaView, Text, View } from "react-native";
import { SplashScreen, Stack, useSearchParams } from "expo-router";

import movies from "../../data/movies.json";
import { imageUrl } from "../../utils/movie";

const SingleMovie: React.FC = () => {
  const { id } = useSearchParams();
  if (!id) throw new Error("unreachable");
  console.log({ id });

  const movie = {
    adult: false,
    backdrop_path: "/i8dshLvq4LE3s0v8PrkDdUyb1ae.jpg",
    belongs_to_collection: {
      id: 404609,
      name: "John Wick Collection",
      poster_path: "/xUidyvYFsbbuExifLkslpcd8SMc.jpg",
      backdrop_path: "/fSwYa5q2xRkBoOOjueLpkLf3N1m.jpg",
    },
    budget: 90000000,
    genres: [
      {
        id: 28,
        name: "Action",
      },
      {
        id: 53,
        name: "Thriller",
      },
      {
        id: 80,
        name: "Crime",
      },
    ],
    homepage: "https://johnwick.movie",
    id: 603692,
    imdb_id: "tt10366206",
    original_language: "en",
    original_title: "John Wick: Chapter 4",
    overview:
      "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
    popularity: 2803.482,
    poster_path: "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
    production_countries: [
      {
        iso_3166_1: "US",
        name: "United States of America",
      },
    ],
    release_date: "2023-03-22",
    revenue: 137000000,
    runtime: 169,
    status: "Released",
    tagline: "No way back. One way out.",
    title: "John Wick: Chapter 4",
    video: false,
    vote_average: 8.165,
    vote_count: 499,
  };

  // const movie = movies.results.find((movie) => movie.id === Number(id));
  // const { data } = api.movies.getMovieById.useQuery({
  //   id: Number(id),
  // });
  const url = movie?.poster_path ?? movie?.backdrop_path;

  return (
    <SafeAreaView className="bg-slate-900">
      <Stack.Screen options={{ title: movie?.title }} />
      <View className="h-[450px]">
        <Image
          source={{ uri: imageUrl(url) }}
          alt={movie?.title}
          className="h-full w-full"
          resizeMode="contain"
        />
      </View>
      <View className="h-full w-full p-6">
        <Text className="py-2 text-3xl font-bold text-slate-100">
          {movie?.title}
        </Text>
        <View className="mt-2 flex flex-row gap-4">
          {movie?.genres?.map((g) => (
            <View
              key={g.id}
              className="rounded-lg border border-slate-500 px-6 py-2"
            >
              <Text className="text-slate-100">{g.name}</Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SingleMovie;
