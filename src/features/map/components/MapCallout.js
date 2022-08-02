import React from "react";
import { StyleSheet } from "react-native";
import { Callout } from "react-native-maps";
import { space } from "../../../utils/spacing";
import { CompactRestaurantInfo } from "../../../components/CompactRestaurantInfo";

export const MapCallout = ({ restaurant, navigation }) => {
  return (
    <Callout
      style={styles.details}
      onPress={() => navigation.navigate("RestaurantDetail", { restaurant })}
    >
      <CompactRestaurantInfo restaurant={restaurant} />
    </Callout>
  );
};

const styles = StyleSheet.create({
  details: {
    padding: space.lg,
    maxWidth: 120,
    alignItems: "center",
  },
});
