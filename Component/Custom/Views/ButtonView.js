
import React from "react";
import { View, TouchableOpacity, Text } from "react-native"



export default ButtonView = ({title, pressClick}) => {
    return (
        <View style={{ width: "100%", alignItems: 'center' }}>

            <View style={{ width: "70%", height: 50, alignItems: "center" }}>
                <TouchableOpacity
                    onPress={pressClick}
                    style={{
                        alignItems: "center",
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 10,
                        backgroundColor: "green",
                        borderRadius: 20,
                        height: 40,
                    }}
                >
                    <Text> {title} </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}