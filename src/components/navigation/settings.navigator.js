import React from "react";
import { SettingsScreen } from "../../features/settings/screens/SettingsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FavoritesScreen } from "../../features/settings/screens/FavoritesScreen";

export const SettingsNavigator = ({ route, navigation }) => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Group screenOptions={{ headerBackVisible: true }}>
        <Stack.Screen
          options={{ title: "My favorites" }}
          name="Favorites"
          component={FavoritesScreen}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
