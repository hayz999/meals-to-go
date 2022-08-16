import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { space } from "../../../utils/spacing";
import { colors } from "../../../utils/colors";
import { AuthBackground } from "../../../components/AuthBackground";
import { Title } from "../../../components/Title";

export const AccountScreen = ({ navigation }) => {
  return (
    <AuthBackground>
      <Title />
      <View style={styles.container}>
        <Button
          style={styles.button}
          icon="lock-open-outline"
          color={colors.brand.primary}
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Button>
        <Button
          style={styles.button}
          icon="email"
          color={colors.brand.primary}
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </Button>
      </View>
    </AuthBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: space.lg,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
  button: {
    padding: space.md,
    margin: space.lg,
  },
});
