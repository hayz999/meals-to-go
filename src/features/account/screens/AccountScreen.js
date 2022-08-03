import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { space } from "../../../utils/spacing";
import { colors } from "../../../utils/colors";

export const AccountScreen = ({ navigation }) => {
  const image = {
    uri: "https://raw.githubusercontent.com/mobinni/MealsToGo/59-image-background-solution/assets/home_bg.jpg",
  };
  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.cover} />
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
          icon="lock-open-outline"
          color={colors.brand.primary}
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </Button>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cover: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  container: {
    padding: space.lg,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
  button: {
    padding: space.md,
    margin: space.lg,
  },
});
