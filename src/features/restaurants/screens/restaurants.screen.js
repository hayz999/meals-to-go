import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { space } from "../../../utils/spacing";
import { SearchBar } from "../../../components/SearchBar";

export const RestaurantsScreen = () => {
  return (
    <>
      <View style={styles.search}>
        <SearchBar />
      </View>
      <FlatList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }]}
        renderItem={() => <RestaurantInfoCard />}
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
  search: {
    padding: space.lg,
  },
});
