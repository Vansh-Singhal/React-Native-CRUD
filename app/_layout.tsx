import { Slot, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView className="flex-1" edges={["top", "bottom"]}>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  );
}
