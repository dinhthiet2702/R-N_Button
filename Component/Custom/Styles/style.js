import React from "react";

import {
    StyleSheet

} from "react-native";


export const styleImageList = StyleSheet.create({

    viewCheckBox: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
        marginTop: 10,

    },
    viewContainer: {
        paddingLeft: 10,
        borderWidth: 0.5,
        borderColor: "grey",
        width: "100%",
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
    },
    scrollViewStyle: {
        width: "100%",
        borderColor: "gray",
        height: 100,
        borderLeftWidth: 0.5,
        borderBottomWidth: 0.5,
        borderRightWidth: 0.5,
    },
    scrollViewItemTouchable: {
        paddingLeft: 10,
        paddingRight: 10,
        borderTopWidth: 0.5,
        width: "100%",
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
    },
    viewTitle: {
        width: "100%",
        height: 20,
        backgroundColor: "gray",
        opacity: 20,
        marginTop: 20,
        alignItems: "center",
    }

});