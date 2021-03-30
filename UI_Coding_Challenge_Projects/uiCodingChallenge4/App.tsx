import React from "react";
import { SafeAreaView, StyleSheet, Text, View, } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Home } from "./src/screens";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Nunito-Regular": require("./src/assets/fonts/Nunito-Regular.ttf")
  })

  if (!fontsLoaded) {
    return <AppLoading />

  } else {
    return (
      <SafeAreaView style={styles.container}>
        <Home />
      </SafeAreaView>
    );

  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 30
  },
});
