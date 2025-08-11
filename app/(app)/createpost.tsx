import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "@/types/PostValidation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addPost } from "@/redux/slices/postsSlice";
import { AppDispatch, RootState } from "@/redux/store";

function randomIntFromInterval(min: number, max: number):number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const CreatePost = () => {
  const dispatch = useDispatch<AppDispatch>();
  let user = useSelector((state: RootState) => state.auth.logged_user);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addPostHandler = () => {
    if (!title.trim() || !description.trim()) {
      Alert.alert("Validation Error", "Title and description are required.");
      return;
    }

    const newPost: Post = {
      id: randomIntFromInterval(1, 100000),
      identifier: user?.name || "User",
      title: title.trim(),
      description: description.trim(),
    };

    dispatch(addPost(newPost));
    setTitle("");
    setDescription("");

    Alert.alert("Success", "Your post has been created.");
  };

  return (
    <View className="flex-1 bg-white gap-8 px-4">
      <Text className="text-xl font-semibold">Create Post</Text>
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
          onPress={addPostHandler}
          activeOpacity={0.8}
        >
          <Text className="text-white font-semibold text-lg">Confirm Post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreatePost;
