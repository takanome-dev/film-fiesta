import { Image, SafeAreaView, Text, View } from "react-native";
import { SplashScreen, Stack, useSearchParams } from "expo-router";

import movies from "../../data/movies.json";
import { imageUrl } from "../../utils/movie";

const SingleMovie: React.FC = () => {
  const { id } = useSearchParams();
  if (!id) throw new Error("unreachable");

  const movie = movies.results.find((movie) => movie.id === Number(id));
  // const { data } = api.movies.getMovieById.useQuery({
  //   id: Number(id),
  // });

  return (
    <SafeAreaView className="bg-[#1F104A]">
      <Stack.Screen options={{ title: movie?.title }} />
      <View className="h-96">
        <Image
          source={{ uri: imageUrl(movie?.poster_path ?? movie?.backdrop_path) }}
          alt={movie?.title}
          className="flex-1"
          resizeMode="contain"
        />
      </View>
      <View className="h-full w-full p-4">
        <Text className="py-2 text-3xl font-bold text-white">
          {movie?.title}
        </Text>
        <Text className="py-4 text-white">{movie?.overview}</Text>
      </View>
    </SafeAreaView>
  );
};

export default SingleMovie;
