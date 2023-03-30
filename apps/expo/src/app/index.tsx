import React from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SplashScreen, Stack, useRouter } from "expo-router";
import { FlashList } from "@shopify/flash-list";

import Card from "../components/card";
import movies from "../data/movies.json";
import { api, type RouterOutputs } from "../utils/api";

const Index = () => {
  // const { data, error, isLoading } = api.movies.getMovies.useQuery({
  //   page: 1,
  // });
  // console.log({ data, error, isLoading });

  // if (isLoading) return <SplashScreen />;

  // if (error) {
  //   return (
  //     <View>
  //       <Text>Something went wrong</Text>
  //       <Text>{error.message}</Text>
  //     </View>
  //   );
  // }

  return (
    <SafeAreaView className="bg-slate-900">
      {/* <Stack.Screen options={{ title: "Home Page" }} /> */}
      <View className="h-full w-full p-4">
        <FlashList
          data={movies.results ?? []}
          estimatedItemSize={20}
          ItemSeparatorComponent={() => <View className="h-2" />}
          renderItem={(movie) => <Card movie={movie.item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Index;
