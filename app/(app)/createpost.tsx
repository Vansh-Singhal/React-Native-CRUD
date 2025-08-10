import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addPost = () => {

  }

  return (
    <View className="flex-1 bg-white gap-8 px-4">
      <Text className="text-xl font-semibold">Create / Edit Post</Text>
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
                onPress={addPost}
                activeOpacity={0.8}
              >
                <Text className="text-white font-semibold text-lg">Confirm Post</Text>
              </TouchableOpacity>
              </View>
    </View>
  );
};

export default CreatePost;
