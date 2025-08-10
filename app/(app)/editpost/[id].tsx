import { updatePost } from "@/redux/slices/postsSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { Post } from "@/types/PostValidation";
import { RouteProp } from "@react-navigation/native";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

type EditPostRouteProp = RouteProp<{ params: { id: number } }, "params">;

const EditPost = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { id } = useLocalSearchParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const postId = Number(id);
  const post = useSelector((state: RootState) =>
    state.posts.data.find((p) => p.id === postId)
  );

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setDescription(post.description);
    }
  }, [post]);

  const editPostHandler = () => {
    if (!post) {
      Alert.alert("Post not found", "Unable to find the post to edit.");
      return;
    }

    const updatedPost: Post = {
      ...post,
      title: title.trim(),
      description: description.trim(),
    };

    dispatch(updatePost(updatedPost));
    router.replace("/(app)/home");
  };

  return (
    <View className="flex-1 bg-white gap-8 px-4">
      <Text className="text-xl font-semibold">Edit Post</Text>
      <View className="gap-2">
        <TextInput
          className="bg-gray-100 border rounded-lg px-4 py-3 mx-8"
          placeholder="Title goes here"
          placeholderTextColor="#9CA3AF"
          onChangeText={setTitle}
          value={title}
        />
        <TextInput
          className="bg-gray-100 border rounded-lg px-4 py-3 mx-8"
          placeholder="Decription..."
          placeholderTextColor="#9CA3AF"
          onChangeText={setDescription}
          value={description}
        />
      </View>

      <View className="items-center mx-8 gap-2">
        <TouchableOpacity
          className="bg-blue-600 rounded-lg py-3 items-center mx-8 w-full"
          onPress={editPostHandler}
          activeOpacity={0.8}
        >
          <Text className="text-white font-semibold text-lg">Confirm Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditPost;
