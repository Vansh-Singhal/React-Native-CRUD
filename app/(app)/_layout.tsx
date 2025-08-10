import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2563eb",
        tabBarIconStyle: { display: "none" }, // Removes space for icon
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="createpost" options={{ title: "Create" }} />
      <Tabs.Screen name="mypost" options={{ title: "My Posts" }} />
    </Tabs>
  );
};

export default _layout;
