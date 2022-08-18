import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { space } from "../../../utils/spacing";
import { colors } from "../../../utils/colors";
import { AuthBackground } from "../../../components/AuthBackground";
import { Title } from "../../../components/Title";
import Lottie from "lottie-react-native";

export const AccountScreen = ({ navigation }) => {
  return (
    <AuthBackground>
      <Lottie
        style={styles.animation}
        autoPlay
        loop
        resizeMode="cover"
        source={require("../../../../assets/watermelon.json")}
      />
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
  animation: {
    width: "100%",
    height: "65%",
    position: "absolute",
    top: space.lg,
    padding: space.md,
  },
});
