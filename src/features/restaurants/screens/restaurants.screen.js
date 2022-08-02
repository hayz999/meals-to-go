import React, { useContext } from "react";
import { StyleSheet, FlatList, Text, TouchableOpacity } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { space } from "../../../utils/spacing";
import { colors } from "../../../utils/colors";
import { fonts, fontSizes } from "../../../utils/fonts";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator } from "react-native-paper";
import { Search } from "../components/search.component";

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, error, isLoading } = useContext(RestaurantsContext);

  return (
    <>
      <Search />
      {isLoading && (
        <ActivityIndicator
          animating={true}
          color={colors.brand.primary}
          style={{ top: "30%" }}
          size="large"
        />
      )}

      {error && <Text style={styles.error}>No restaurants found.</Text>}

      <FlatList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Restaurant Detail", { restaurant: item })
              }
            >
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.card}
      />
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: space.lg,
  },
  error: {
    fontSize: fontSizes.h5,
    fontFamily: fonts.body,
    textAlign: "center",
  },
});
