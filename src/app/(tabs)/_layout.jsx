import React from "react";
import { Tabs } from "expo-router";
import CustomTabBar from "../../components/common/CustomTabBar";

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="browse"
        options={{
          title: "Browse",
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
        }}
      />

    </Tabs>
  );
}
