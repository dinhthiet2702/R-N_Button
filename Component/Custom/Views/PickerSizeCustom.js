import React from "react";
import { View, Dimensions, Text } from "react-native";
import InputText from "./InputText";


const widthLimit = Dimensions.get("window").width - 150;
const heightLimit = 50;

export default PickerSizeCustom = ({ title, valueText, setValueText }) => {
    return (
        <View style={{ width: "100%", alignItems: 'center' }}>
            <View
                style={{
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
                <View style={{width: "50%"}}>
                    <InputText valueText={valueText} setData={setValueText} title="Width" field="width" />
                </View>

                <View style={{width: "50%"}}>
                    <InputText  valueText={valueText} setData={setValueText} title="Height" field="height" />
                </View>
            </View>

            <View style={{width: "50%"}}>
                    <InputText valueText={valueText} setData={setValueText} title="Radius" field="radius" />
            </View>
        </View>
    )
}