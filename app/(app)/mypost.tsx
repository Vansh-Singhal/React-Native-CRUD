import {
  Alert,
  Button,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import PostCard from "@/Components/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { deletePost } from "@/redux/slices/postsSlice";
import { Post } from "@/types/PostValidation";
import { logout } from "@/redux/slices/authSlice";
import { useRouter } from "expo-router";

const MyPosts = () => {
  let user = useSelector((state: RootState) => state.auth.logged_user);

  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const allPosts = useSelector((state: RootState) => state.posts.data);

  const posts = user
    ? allPosts.filter((post) => post.identifier === user.name)
    : [];

  const handleDelete = (id: number) => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to delete this post?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => dispatch(deletePost(id)),
        },
      ]
    );
  };

  const renderItem = ({ item }: { item: Post }) => {
    return <PostCard {...item} adminOptions={true} DeletePost={handleDelete} />;
  };

  const handleLogout = () => {
    dispatch(logout());
    router.push("../login");
  };

  return (
    <View className="flex-1 bg-white gap-8 px-4">
      <View className="flex-row justify-between items-center">
        <Text className="text-xl font-semibold">My Posts</Text>
        <TouchableOpacity onPress={handleLogout}>
          <Text className="text-blue-500 text-base">Logout</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default MyPosts;
