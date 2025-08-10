import { FlatList, ListRenderItem, Text, View } from "react-native";
import React from "react";
import PostCard from "@/Components/PostCard";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Post } from "@/types/PostValidation";

const Home = () => {
  const posts = useSelector((state:RootState)=>state.posts.data);

  const renderItem: ListRenderItem<Post> = ({ item }) => {
    return <PostCard {...item} />;
  };

  return (
    <View className="flex-1 bg-white gap-4 px-4">
      <Text className="text-xl font-semibold">Home</Text>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;
