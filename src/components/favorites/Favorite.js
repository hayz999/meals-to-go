import React, { useContext } from "react";
import { FavoritesContext } from "../../services/favorites/favorites.context";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity, StyleSheet } from "react-native";
import { space } from "../../utils/spacing";

export const Favorite = ({ restaurant }) => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);

  // this would not be performant with a larger list of data
  const isFavorite = favorites.find((r) => r.placeId === restaurant.placeId);

  return (
    <TouchableOpacity
      style={styles.favoriteIcon}
      onPress={() =>
        !isFavorite
          ? addToFavorites(restaurant)
          : removeFromFavorites(restaurant)
      }
    >
      <AntDesign
        name={isFavorite ? "heart" : "hearto"}
        size={24}
        color={isFavorite ? "red" : "white"}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  favoriteIcon: {
    position: "absolute",
    top: space.xl,
    right: space.xl,
    zIndex: 9,
  },
});
