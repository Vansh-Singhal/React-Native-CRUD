import {
  FlatList,
  ListRenderItem,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import PostCard from "@/Components/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { Post } from "@/types/PostValidation";
import { logout } from "@/redux/slices/authSlice";
import { useRouter } from "expo-router";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const posts = useSelector((state: RootState) => state.posts.data);

  const renderItem: ListRenderItem<Post> = ({ item }) => {
    return <PostCard {...item} />;
  };

  const handleLogout = () => {
    dispatch(logout());
    router.push("../login");
  };

  return (
    <View className="flex-1 bg-white gap-4 px-4">
      <View className="flex-row justify-between items-center">
        <Text className="text-xl font-semibold">Home</Text>
        <TouchableOpacity onPress={handleLogout}>
          <Text className="text-blue-500 text-base">Logout</Text>
        </TouchableOpacity>
      </View>

      {posts.length > 0 ? (
        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text className="text-base">Nothing to see...</Text>
      )}
    </View>
  );
};

export default Home;
