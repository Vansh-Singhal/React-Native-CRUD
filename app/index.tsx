import "@/global.css";
import { RootState } from "@/redux/store";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { InteractionManager, View } from "react-native";
import { useSelector } from "react-redux";

export default function Index() {
  const router = useRouter();
  const storedUser = useSelector((state: RootState) => state.auth.logged_user);

  useEffect(() => {
    const task = InteractionManager.runAfterInteractions(() => {
      if (storedUser) {
        router.replace("/(app)/home");
      } else {
        router.replace("/(auth)/signup");
      }
    });

    return () => task.cancel();
  }, [storedUser, router]);

  return <View className="flex-1" />;
}
