import React, { useContext, useState } from "react";
import { Searchbar } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { space } from "../../../utils/spacing";
import { LocationContext } from "../../../services/location/location.context";

export const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <View style={styles.search}>
      <Searchbar
        placeholder="Search for a location"
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
