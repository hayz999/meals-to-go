import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
} from "react-native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./src/components/Navigation";

const isAndroid = Platform.OS === "android";

export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Navigation />
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
});
