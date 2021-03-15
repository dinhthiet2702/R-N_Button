import React from "react";
import {
    StyleSheet,
    View,
    Text
} from "react-native";



export default PickerFontCustom = ({title, setValueText, valueText}) => {
    return (
        <View style={{ width:"100%" }}>
            <View style={{
                width: "100%",
                height: 20,
                backgroundColor: "gray",
                opacity: 20,
                marginTop: 20,
                alignItems: "center",
            }}
            >
                <Text>{title}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
                <PickerNumber
                    value={valueText}
                    setData={setValueText}
                    title="Font Size:"
                    field="fontSize"
                    limitSize={25}
                    number={10}
                    count={1}
                />
                <PickerNumber
                    value={valueText}
                    setData={setValueText}
                    title="Font Weight:"
                    field="fontWeight"
                    limitSize={900}
                    number={100}
                    count={100}
                />
            </View>
        </View>

    )
}