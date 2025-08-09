import { FlatList, Text, View } from "react-native";
import React from "react";
import PostCard from "@/Components/PostCard";

const posts = [
  {
    id: 1,
    identifier: "user_001",
    title: "Learning NativeWind",
    description:
      "A quick intro to styling React Native apps with Tailwind-like classes.",
  },
  {
    id: 2,
    identifier: "admin_007",
    title: "Building a CRUD App",
    description:
      "Step-by-step guide to building a CRUD app with Expo and local storage.",
  },
  {
    id: 3,
    identifier: "guest_user",
    title: "Expo Orientation Lock",
    description:
      "How to lock your React Native app to landscape mode using Expo APIs.",
  },
  {
    id: 4,
    identifier: "dev_jane",
    title: "State Management in RN",
    description:
      "Understanding Context, Redux, and Zustand for managing state in React Native.",
  },
  {
    id: 5,
    identifier: "test_user123",
    title: "Native Modules 101",
    description:
      "Basics of linking and using native modules in React Native (bare workflow).",
  },
  {
    id: 6,
    identifier: "johnny_dev",
    title: "FlatList vs ScrollView",
    description:
      "Comparison of performance and use-cases between FlatList and ScrollView.",
  },
  {
    id: 7,
    identifier: "coolcoder",
    title: "MMKV Storage Setup",
    description:
      "Implement lightning-fast local storage using react-native-mmkv in your app.",
  },
  {
    id: 8,
    identifier: "typescript_fan",
    title: "TypeScript in React Native",
    description:
      "How to structure and type your components cleanly in a React Native app.",
  },
  {
    id: 9,
    identifier: "debug_master",
    title: "Debugging in Expo",
    description:
      "Best practices for debugging logic, network, and UI issues in Expo projects.",
  },
  {
    id: 10,
    identifier: "layout_king",
    title: "Responsive Layouts",
    description:
      "Tips for building adaptive UIs in landscape and various screen sizes.",
  },
];

const Home = () => {
  const showItem = ({ item }: { item: any }) => {
    return <PostCard {...item} />;
  };

  return (
    <View className="flex-1 bg-white gap-4">
      <Text className="text-xl font-semibold">Home</Text>
      <FlatList
        data={posts}
        renderItem={showItem}
        keyExtractor={(item) => item.id.toString()}
      ></FlatList>
    </View>
  );
};

export default Home;
