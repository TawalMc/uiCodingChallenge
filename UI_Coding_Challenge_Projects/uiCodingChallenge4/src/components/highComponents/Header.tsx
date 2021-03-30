import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Donut from "../lowComponents/Donut";
import HeaderTitle from "../lowComponents/HeaderTitle";

export default function Header() {
    const HeaderChart = () => {
        return (
            <View style={styles.headerChart}>
                <Donut />
                <Text>Hey Donut</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <HeaderTitle />
            <HeaderChart />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginTop: 20
    },
    headerChart: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
})