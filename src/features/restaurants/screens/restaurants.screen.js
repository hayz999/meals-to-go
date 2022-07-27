import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { space } from "../../../utils/spacing";

export const RestaurantsScreen = () => {
  return (
    <View style={styles.card}>
      <RestaurantInfoCard />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: space.lg,
  },
});
