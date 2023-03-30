import { Image, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

import { type RouterOutputs } from "@acme/api";

import { imageUrl } from "../utils/movie";

interface CardProps {
  movie: RouterOutputs["movies"]["discover"]["results"][number];
}

const Card: React.FC<CardProps> = ({ movie }) => {
  const router = useRouter();

  return (
    <View className="group relative rounded-lg border border-slate-700 bg-slate-900 p-4 shadow-slate-200 backdrop-blur-md">
      {/* <View className="flex-grow"> */}
      <TouchableOpacity onPress={() => router.push(`/movies/${movie.id}`)}>
        <View className="h-96">
          <Image
            source={{ uri: imageUrl(movie.poster_path ?? movie.backdrop_path) }}
            alt={movie.title}
            className="flex-1"
            resizeMode="contain"
          />
        </View>
        <View>
          <Text className="text-xl font-semibold text-pink-400">
            {movie.title}
          </Text>
          <Text className="mt-2 text-white">{movie.popularity}</Text>
        </View>
      </TouchableOpacity>
      {/* </View> */}
    </View>
  );
};

export default Card;
