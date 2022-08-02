import React from "react";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";

const Menu = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section title="Menu">
      <List.Accordion
        title="Breakfast"
        expanded={expanded}
        left={(props) => <List.Icon {...props} icon="bread-slice" />}
        onPress={handlePress}
      >
        <List.Item title="Eggs Benedict" />
        <List.Item title="Classic Breakfast" />
      </List.Accordion>
      <List.Accordion
        title="Lunch"
        left={(props) => <List.Icon {...props} icon="hamburger" />}
      >
        <List.Item title="Burger w/ Fries" />
        <List.Item title="Steak Sandwich" />
        <List.Item title="Mushroom Soup" />
      </List.Accordion>
      <List.Accordion
        title="Dinner"
        left={(props) => <List.Icon {...props} icon="food-variant" />}
      >
        <List.Item title="Spaghetti Bolognese" />
        <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
        <List.Item title="Steak Frites" />
      </List.Accordion>
      <List.Accordion
        title="Drinks"
        left={(props) => <List.Icon {...props} icon="cup" />}
      >
        <List.Item title="Coffee" />
        <List.Item title="Tea" />
        <List.Item title="Modelo" />
        <List.Item title="Coke" />
        <List.Item title="Fanta" />
      </List.Accordion>
    </List.Section>
  );
};

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;

  return (
    <>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <Menu />
      </ScrollView>
    </>
  );
};
