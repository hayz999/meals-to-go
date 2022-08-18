import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { List, Avatar } from "react-native-paper";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { space } from "../../../utils/spacing";
import { fonts, fontSizes } from "../../../utils/fonts";

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);

  return (
    <>
      <View style={styles.avatar}>
        <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
        <Text style={styles.userName}>{user.email}</Text>
      </View>
      <List.Section>
        <List.Item
          style={styles.item}
          title="Favorites"
          description="View your favorites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favorites")}
        />
        <List.Item
          style={styles.item}
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: space.lg,
  },
  avatar: {
    alignItems: "center",
    marginTop: space.md,
  },
  userName: {
    fontFamily: fonts.heading,
    fontSize: fontSizes.body,
    paddingTop: space.md,
  },
});
