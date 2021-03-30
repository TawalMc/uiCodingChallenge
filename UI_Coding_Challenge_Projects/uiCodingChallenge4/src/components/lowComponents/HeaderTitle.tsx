import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function HeaderTitle() {

    const Options = () => (
        <View style={{
            backgroundColor: "black",
            width: 5,
            height: 5,
            borderRadius: 5,
            marginHorizontal: 2
        }} />
    )

    return (
        <View style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
        }}>
            <Text style={{
                fontFamily: "Nunito-Regular",
                fontSize: 25
            }}>My Files</Text>
            <TouchableOpacity style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
            }}
                activeOpacity={0.6}
                onPress={() => console.log("options")}>
                <Options />
                <Options />
                <Options />
            </TouchableOpacity>
        </View>
    )
}