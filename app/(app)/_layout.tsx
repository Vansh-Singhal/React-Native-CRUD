import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2563eb",
        tabBarIcon: () => null,
      }}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="createpost" options={{ title: "Create" }} />
      <Tabs.Screen name="editpost" options={{ title: "Edit" }} />
    </Tabs>
  );
};

export default _layout;
