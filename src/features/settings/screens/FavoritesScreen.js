import React, { useContext } from "react";
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { RestaurantInfoCard } from "../../restaurants/components/RestaurantInfoCard";
import { space } from "../../../utils/spacing";
import { fonts, fontSizes } from "../../../utils/fonts";

export const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);

  return favorites.length ? (
    <View>
      <FlatList
        style={styles.list}
        data={favorites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", { restaurant: item })
              }
            >
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </View>
  ) : (
    <View style={styles.empty}>
      <Text style={styles.message}>No favorites yet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: space.md,
  },
  empty: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: space.md,
  },
  message: {
    fontFamily: fonts.heading,
    fontSize: fontSizes.h4,
  },
});
