import { Text, TouchableOpacity, View } from "react-native";
import { useRouter } from "expo-router";

import { type RouterOutputs } from "@acme/api";

interface CardProps {
  movie: RouterOutputs["movies"]["discover"]["results"][number];
}

const Card: React.FC<CardProps> = ({ movie }) => {
  const router = useRouter();

  return (
    <View className="flex flex-row rounded-lg bg-white/10 p-4">
      <View className="flex-grow">
        <TouchableOpacity onPress={() => router.push(`/post/${movie.id}`)}>
          <Text className="text-xl font-semibold text-pink-400">
            {movie.title}
          </Text>
          <Text className="mt-2 text-white">{movie.overview}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Card;
