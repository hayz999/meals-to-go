import React from "react";
import { ImageBackground, View, StyleSheet } from "react-native";

export const AuthBackground = ({ children }) => {
  return (
    <ImageBackground
      source={require("../../assets/home.png")}
      style={styles.image}
    >
      <View style={styles.cover} />
      {children}
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
