import React from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SplashScreen, Stack, useRouter } from "expo-router";
import { FlashList } from "@shopify/flash-list";

import Card from "../components/card";
import { api, type RouterOutputs } from "../utils/api";

const Index = () => {
  const { data, error, isLoading } = api.movies.getMovies.useQuery({
    page: 1,
  });
  console.log({ data, error, isLoading });

  if (isLoading) return <SplashScreen />;

  if (error) {
    return (
      <View>
        <Text>Something went wrong</Text>
        <Text>{error.message}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView className="bg-[#1F104A]">
      {/* <Stack.Screen options={{ title: "Home Page" }} /> */}
      <View className="h-full w-full p-4">
        <Text className="mx-auto pb-2 text-5xl font-bold text-white">
          Create <Text className="text-pink-400">T3</Text> Turbo
        </Text>

        <Button title="Refresh posts" color={"#f472b6"} />

        <FlashList
          data={data?.results ?? []}
          estimatedItemSize={20}
          ItemSeparatorComponent={() => <View className="h-2" />}
          renderItem={(movie) => <Card movie={movie.item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Index;
