import React from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { Avatar, Card, Paragraph } from "react-native-paper";
import { space } from "../../../utils/spacing";
import { colors } from "../../../utils/colors";
import { fonts, fontSizes } from "../../../utils/fonts";
import { sizes } from "../../../utils/sizes";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Favorite } from "../../../components/favorites/Favorite";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name,
    icon,
    photos,
    vicinity,
    isOpenNow,
    rating,
    isClosedTemporarily,
    placeId,
  } = restaurant;

  const ratingArray = rating ? Array.from(new Array(Math.floor(rating))) : [];

  return (
    <Card elevation={5} style={styles.card}>
      <View>
        <Favorite restaurant={restaurant} />
        <Card.Cover
          key={name}
          style={styles.cover}
          source={{ uri: photos[0] }}
        />
      </View>

      <Card.Title title={name} titleStyle={styles.title} />

      <Card.Content>
        <View style={styles.icons}>
          <View style={styles.stars}>
            {ratingArray.map((_, index) => (
              <SvgXml xml={star} key={`star-${placeId}-${index}`} />
            ))}
          </View>

          <View style={styles.infoSection}>
            {isClosedTemporarily && (
              <Text style={styles.closed}>CLOSED TEMPORARILY</Text>
            )}

            {isOpenNow && (
              <View style={styles.mediumIcon}>
                <SvgXml xml={open} />
              </View>
            )}
            <Image style={styles.mediumIcon} source={{ uri: icon }} />
          </View>
        </View>

        <Paragraph style={styles.address}>{vicinity}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.bg.primary,
    marginBottom: space.lg,
  },
  cover: {
    padding: space.lg,
    backgroundColor: colors.bg.primary,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  stars: {
    width: sizes.md,
    height: sizes.md,
    flexDirection: "row",
  },
  infoSection: {
    flexDirection: "row",
    justifyContent: "flex-end",
    flex: 0.6,
  },
  mediumIcon: {
    width: sizes.md,
    height: sizes.md,
    marginLeft: space.md,
  },
  title: {
    fontFamily: fonts.heading,
  },
  address: {
    fontFamily: fonts.body,
    fontSize: fontSizes.caption,
  },
  closed: {
    color: colors.text.error,
    fontWeight: "bold",
    fontFamily: fonts.body,
    marginLeft: space.md,
  },
});
