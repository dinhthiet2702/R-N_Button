import React from "react";

import {
    View,
    Text,
    Image,
    TouchableOpacity,

} from "react-native";

export const CheckBoxView = ({ title, state, setState }) => {
    return (
        <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Text>{title}</Text>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                    setState(state + 1);
                }}
                style={{
                    width: 25,
                    height: 25,
                    borderWidth: 1,
                    alignItems: "center",
                }}
            >
                {state % 2 === 0 ? (
                    <Image />
                ) : (
                    <Image
                        source={require('../../../assets/iconDrop/check.png')}
                        style={{ width: 20, height: 20 }}
                    ></Image>
                )}
            </TouchableOpacity>
        </View>
    )
}

