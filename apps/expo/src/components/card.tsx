import { Image, Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";
import { Octicons } from "@expo/vector-icons";

import { type RouterOutputs } from "@acme/api";

import { imageUrl } from "../utils/movie";

interface CardProps {
  movie: RouterOutputs["movies"]["discover"]["results"][number];
}

const Card: React.FC<CardProps> = ({ movie }) => {
  const router = useRouter();

  return (
    <View className="relative rounded-lg border border-slate-600 bg-slate-900 p-4 shadow-slate-200">
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => router.push(`/movies/${movie.id}`)}
      >
        <View className="h-[400px] w-full">
          <Image
            source={{
              uri: imageUrl(movie.poster_path ?? movie.backdrop_path),
            }}
            alt={movie.title}
            className="h-full w-full object-contain"
            resizeMode="cover"
          />
        </View>
        <View className="max-w-full overflow-hidden">
          <View className="mt-4 flex flex-row items-center justify-between">
            <View className="flex flex-row items-center justify-start">
              <Octicons name="star-fill" size={18} color="yellow" />
              <Text className="ml-2 text-lg font-semibold text-slate-200">
                {movie.vote_average.toFixed(1)}
              </Text>
            </View>
            <Text className="text-slate-400">{movie.release_date}</Text>
          </View>
          {/* TODO: shiit, it's not clamp */}
          <Text className="mt-4 text-xl font-semibold text-slate-100 line-clamp-1">
            {movie.title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
