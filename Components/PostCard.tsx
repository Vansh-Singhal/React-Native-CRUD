import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

type PostCardProps = {
  identifier: string;
  title: string;
  description: string;
};

const PostCard = ({ identifier, title, description }: PostCardProps) => {
  const navigation = useNavigation();

  const goToEdit = () => {};
  const DeletePost = () => {};

  return (
    <View className="bg-white rounded-xl shadow-md p-4 mb-4 w-full border border-gray-200">
      <View className="mb-1">
        <Text className="text-gray-500 text-xs uppercase tracking-wide font-semibold">
          {identifier}
        </Text>
      </View>

      <View className="mb-2">
        <Text className="text-lg font-semibold tracking-wider text-blue-700">
          {title}
        </Text>
      </View>

      <View>
        <Text className="text-gray-500 text-xs tracking-wide">
          {description}
        </Text>
      </View>

      <View className="flex-row mt-4 gap-2">
        <TouchableOpacity
          className="bg-yellow-500 px-4 py-2 rounded-lg"
          onPress={goToEdit}
        >
          <Text className="text-white font-semibold">Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-red-500 px-4 py-2 rounded-lg"
          onPress={DeletePost}
        >
          <Text className="text-white font-semibold">Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostCard;
