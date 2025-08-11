import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { User } from "@/types/UserValidation";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/redux/store";
import { signup } from "@/redux/slices/authSlice";

const Signup = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [name, setName] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const router = useRouter();

  const signuphandler = async () => {
    try {
      if (!name.trim() || !contact.trim() ) Alert.alert("Validation Error","Enter required credentials");
      else{
        let user: User = { name, contact };
        dispatch(signup(user)); //We can use API call on a live app instead
        router.push("./login");
      }
    } catch (e) {
      console.error("Failed to save user:", e);
    }
  };

  return (
    <View className="flex-1 bg-white justify-center py-8 gap-8">
      <View className="items-center">
        <Text className="text-3xl font-bold text-gray-800">Sign Up</Text>
        <Text className="text-gray-500 mt-1">Create your account</Text>
      </View>

      <View className="gap-8">
        <View className="gap-2">
          <TextInput
            className="bg-gray-100 border rounded-lg px-4 py-3 mx-8"
            placeholder="Full Name"
            placeholderTextColor="#9CA3AF"
            onChangeText={setName}
            value={name}
          />

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
            onPress={signuphandler}
            activeOpacity={0.8}
          >
            <Text className="text-white font-semibold text-lg">Log In</Text>
          </TouchableOpacity>
          <View className="flex-row">
            <Text className="text-gray-500">Don't have an account? </Text>
            <Link href="../login">Login</Link>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Signup;
