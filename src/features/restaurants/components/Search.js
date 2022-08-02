import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { space } from "../../../utils/spacing";
import { LocationContext } from "../../../services/location/location.context";

export const Search = ({ isFavoritesToggled, onFavoritesToggled }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <View style={styles.search}>
      <Searchbar
        icon={isFavoritesToggled ? "heart" : "heart-outline"}
        onIconPress={onFavoritesToggled}
        placeholder="Search for a location"
        clearAccessibilityLabel="Clear search field"
        searchAccessibilityLabel="Search for a city"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    padding: space.lg,
  },
});
