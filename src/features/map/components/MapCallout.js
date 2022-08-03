import React from "react";
import { StyleSheet } from "react-native";
import { Callout } from "react-native-maps";
import { space } from "../../../utils/spacing";
import { CompactRestaurantInfo } from "../../../components/CompactRestaurantInfo";

// this needs to be updated to work with accessibility
export const MapCallout = ({ restaurant, navigation }) => {
  return (
    <Callout
      style={styles.details}
      onPress={() => navigation.navigate("RestaurantDetail", { restaurant })}
    >
      <CompactRestaurantInfo isMap restaurant={restaurant} />
    </Callout>
  );
};

const styles = StyleSheet.create({
  details: {
    padding: space.md,
    maxWidth: 120,
    alignItems: "center",
  },
});
