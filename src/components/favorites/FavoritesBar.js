import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { CompactRestaurantInfo } from "../CompactRestaurantInfo";
import { space } from "../../utils/spacing";
import { fonts, fontSizes } from "../../utils/fonts";

export const FavoritesBar = ({ favorites, onNavigate }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Favorites</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.favoritesSection}>
          {favorites.map((restaurant) => {
            const key = restaurant.name;
            return (
              <TouchableOpacity
                onPress={() => onNavigate("RestaurantDetail", { restaurant })}
                key={key}
                style={styles.card}
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: space.md,
  },
  heading: {
    fontFamily: fonts.body,
    fontSize: fontSizes.caption,
  },
  favoritesSection: {
    flexDirection: "row",
  },
  card: {
    padding: space.md,
  },
});
