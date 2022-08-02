import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

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
          name="Restaurant Detail"
          component={RestaurantDetailScreen}
          options={options}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
