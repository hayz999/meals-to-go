import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { space } from "../../../utils/spacing";
import { LocationContext } from "../../../services/location/location.context";

export const MapSearch = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <View style={styles.search}>
      <Searchbar
        placeholder="Search for a location"
        clearAccessibilityLabel="Clear search field"
        searchAccessibilityLabel="Search for a city"
        icon="map"
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
    position: "absolute",
    zIndex: 999,
    width: "100%",
  },
});
