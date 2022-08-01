import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RestaurantsScreen } from "../features/restaurants/screens/restaurants.screen";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Settings = () => {
  return (
    <View>
      <Text>Settings!</Text>
    </View>
  );
};

const Map = () => {
  return (
    <View>
      <Text>Map!</Text>
    </View>
  );
};

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
  };
};

export const Navigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};
