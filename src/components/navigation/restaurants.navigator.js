import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/RestaurantsScreen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/RestaurantDetailScreen";

export const RestaurantsNavigator = () => {
  const Stack = createNativeStackNavigator();
  const options = { headerShown: false };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Restaurant Screen"
        component={RestaurantsScreen}
        options={options}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name="RestaurantDetail"
          component={RestaurantDetailScreen}
          options={options}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
