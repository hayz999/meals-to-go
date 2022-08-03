import React from "react";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AccountScreen } from "../../features/account/screens/AccountScreen";
import { RegisterScreen } from "../../features/account/screens/RegisterScreen";

const LoginScreen = () => (
  <View>
    <Text>Login Screen</Text>
  </View>
);

export const AccountNavigator = () => {
  const Stack = createNativeStackNavigator();
  const options = { headerShown: false };

  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={AccountScreen} options={options} />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={options}
      />
      <Stack.Screen name="Login" component={LoginScreen} options={options} />
    </Stack.Navigator>
  );
};
