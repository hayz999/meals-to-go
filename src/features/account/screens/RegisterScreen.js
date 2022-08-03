import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";

export const RegisterScreen = () => {
  const image = {
    uri: "https://raw.githubusercontent.com/mobinni/MealsToGo/59-image-background-solution/assets/home_bg.jpg",
  };
  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.cover} />
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
});
