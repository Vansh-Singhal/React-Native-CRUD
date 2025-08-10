import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

const Login = () => {
  const [contact, setContact] = useState("");
  const router = useRouter();

  const loginhandler = async () => {
    try {
      const storedUser = await AsyncStorage.getItem("user");

      if (storedUser !== null) {
        const user = JSON.parse(storedUser);

        if (user.contact === contact) {
          await AsyncStorage.setItem("logged_user", contact);
          console.log("Login successful", user);
          router.push("../home");
        } else {
          console.log("Invalid contact number");
        }
      } else {
        console.log("No user found. Please sign up first.");
      }
    } catch (e) {
      console.error("Login error:", e);
    }
  };
  return (
    <View className="flex-1 bg-white justify-center py-8 gap-8">
      <View className="items-center">
        <Text className="text-3xl font-bold text-gray-800">LOGIN</Text>
        <Text className="text-gray-500 mt-1">Log into your account</Text>
      </View>

      <View className="gap-8">
        <TextInput
          className="bg-gray-100 border rounded-lg px-4 py-3 mx-8"
          placeholder="Contact Number"
          placeholderTextColor="#9CA3AF"
          keyboardType="phone-pad"
          onChangeText={setContact}
          value={contact}
        />
      </View>

      <View className="items-center mx-8 gap-2">
        <TouchableOpacity
          className="bg-blue-600 rounded-lg py-3 items-center mx-8 w-full"
          onPress={loginhandler}
          activeOpacity={0.8}
        >
          <Text className="text-white font-semibold text-lg">Log In</Text>
        </TouchableOpacity>
        <View className="flex-row">
          <Text className="text-gray-500">Don't have an account? </Text>
          <Link href="../signup">Sign Up</Link>
        </View>
      </View>
    </View>
  );
};

export default Login;
