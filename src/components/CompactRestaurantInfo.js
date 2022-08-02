import React from "react";
import WebView from "react-native-webview";
import { Image, Platform, Text, StyleSheet } from "react-native";
import { fonts, fontSizes } from "../utils/fonts";

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant }) => {
  return (
    <>
      {isAndroid ? (
        <WebView source={{ uri: restaurant.photos[0] }} style={styles.image} />
      ) : (
        <Image source={{ uri: restaurant.photos[0] }} style={styles.image} />
      )}
      <Text style={styles.name} center numberOfLines={3}>
        {restaurant.name}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  name: {
    fontFamily: fonts.body,
    fontSize: fontSizes.caption,
  },
  image: {
    borderRadius: 10,
    width: 120,
    height: 100,
  },
});
