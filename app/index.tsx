import "@/global.css";
import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-white justify-between">
      <View>
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
      </View>
    </View>
  );
}
