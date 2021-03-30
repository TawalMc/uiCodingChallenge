import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { images } from "../assets/images";
import { Header, NavBar } from "../components";

export default function Home() {
  return (
    <View style={styles.container}>
      <NavBar leftImage={images.menu} />
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
