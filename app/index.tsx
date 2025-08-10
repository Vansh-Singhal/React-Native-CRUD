import "@/global.css";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, useRouter } from "expo-router";
import { useEffect } from "react";
import { Button, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await AsyncStorage.getItem("logged_user");

        if (user) {
          router.replace("/(app)/home");
        } else {
          router.replace("/(auth)/signup");
        }
      } catch (e) {
        console.error("Failed to read AsyncStorage:", e);
        router.replace("/(auth)/signup"); // fallback
      }
    };

    // Defer navigation until after initial render
    requestAnimationFrame(() => {
      checkUser();
    });
  }, []);

  return (
    <View className="flex-1 bg-white justify-between">
      {/* <View>
        <Text className="text-xl font-bold">AUTH</Text>
        <View className="flex-row gap-4">
          <Link href="../login" asChild>
            <Button title="Login" />
          </Link>
          <Link href="../signup" asChild>
            <Button title="Signup" />
          </Link>
        </View>
      </View>

      <View>
        <Text className="text-xl font-bold">APP</Text>
        <View className="flex-row gap-4">
          <Link href="../home" asChild>
            <Button title="Home" />
          </Link>
        </View>
      </View> */}
    </View>
  );
}
