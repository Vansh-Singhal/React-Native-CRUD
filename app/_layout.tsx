import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <SafeAreaView className="flex-1" edges={["top", "bottom", "left","right"]}>
        <Stack screenOptions={{ headerShown: false }} />
      </SafeAreaView>
    </Provider>
  );
}
