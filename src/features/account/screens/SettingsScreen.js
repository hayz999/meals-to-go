import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const SettingsScreen = () => {
  const { onLogout } = useContext(AuthenticationContext);

  return (
    <View>
      <Text>Settings</Text>
      <Button title="Log Out" onPress={() => onLogout()} />
    </View>
  );
};
