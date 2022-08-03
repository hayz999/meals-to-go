import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // save favorite restaurants to device local storage
  const saveFavorites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favorites", jsonValue);
    } catch (e) {
      console.log("error storing favorites", e);
    }
  };

  // load favorites from device local storage
  const loadFavorites = async () => {
    try {
      const value = await AsyncStorage.getItem("@favorites");

      if (value !== null) {
        setFavorites(JSON.parse(value));
      }
    } catch (e) {
      console.log("error loading favorites", e);
    }
  };

  const addToFavorites = (restaurant) => {
    setFavorites([...favorites, restaurant]);
  };

  const removeFromFavorites = (restaurant) => {
    const newFavorites = favorites.filter(
      (favorite) => favorite.placeId !== restaurant.placeId
    );

    setFavorites(newFavorites);
  };

  // on render, load in favorites
  useEffect(() => {
    loadFavorites();
  }, []);

  // if favorites change, track and store those changes to local storage
  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
