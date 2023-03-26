import { SafeAreaView, Text, View } from "react-native";
import { SplashScreen, Stack, useSearchParams } from "expo-router";

import { api } from "../../utils/api";

const SingleMovie: React.FC = () => {
  const { id } = useSearchParams();
  if (!id) throw new Error("unreachable");

  const { data } = api.movies.getMovieById.useQuery({
    id: Number(id),
  });

  return (
    <SafeAreaView className="bg-[#1F104A]">
      <Stack.Screen options={{ title: data?.title }} />
      <View className="h-full w-full p-4">
        <Text className="py-2 text-3xl font-bold text-white">
          {data?.title}
        </Text>
        <Text className="py-4 text-white">{data?.overview}</Text>
      </View>
    </SafeAreaView>
  );
};

export default SingleMovie;
