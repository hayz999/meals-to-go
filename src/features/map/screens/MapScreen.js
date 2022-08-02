import React, { useContext, useEffect, useState } from "react";
import MapView from "react-native-maps";
import { StyleSheet } from "react-native";
import { MapSearch } from "../components/MapSearch";
import { Marker } from "react-native-maps";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { MapCallout } from "../components/MapCallout";

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { lat, lng, viewport } = location;
  const { restaurants = [] } = useContext(RestaurantsContext);
  const [latDelta, setLatDelta] = useState(0);

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <MapSearch />
      <MapView
        style={styles.map}
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Marker
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
              key={restaurant.name}
              title={restaurant.name}
            >
              <MapCallout restaurant={restaurant} navigation={navigation} />
            </Marker>
          );
        })}
      </MapView>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height: "100%",
    width: "100%",
  },
});
