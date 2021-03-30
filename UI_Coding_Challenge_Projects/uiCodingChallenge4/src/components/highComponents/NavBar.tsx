import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { images } from "../../assets/images";

export default function NavBar({ leftImage }: any): JSX.Element {
    return (
        <View style={styles.container}>
            <View style={{
                width: 24,
                height: 24,
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Image source={leftImage} resizeMode="contain" />
            </View>
            <View style={{
                width: 30,
                height: 30,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#9999ff",
                borderRadius: 15,
                borderWidth: 1,
                borderColor: "blue"
            }}>
                <Image source={images.user} resizeMode="center" style={{
                    width: "75%",
                    height: "75%",
                    tintColor: "blue"
                }} />
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    }
})