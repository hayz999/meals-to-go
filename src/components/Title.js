import React from "react";
import { Text, StyleSheet } from "react-native";
import { fonts, fontSizes } from "../utils/fonts";

export const Title = () => <Text style={styles.title}>Meals To Go</Text>;

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.body,
    fontSize: fontSizes.h3,
  },
});
