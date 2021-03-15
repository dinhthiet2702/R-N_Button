import React, { useState} from "react";
import {
    StyleSheet,
    View,
    Text
} from "react-native";

import { Picker } from "@react-native-picker/picker";

import { arrColor } from '../../../Const/const';

export default PickerColor = ({ value, setData, title, field }) => {

    const [selectedColor, setSelectedColor] = useState();
    return (
        <View
            style={{
                flexDirection: "row",
                width: "50%",
                alignItems: "center",
                justifyContent: "space-between",
                borderWidth: 0.5,
                borderColor: "grey",
                marginTop: 10,
            }}
        >
            <Text style={{ width: "40%", marginLeft: 10 }}>{title} </Text>
            <Picker
                itemStyle={{ width: "50%", height: 100, fontSize: 15 }}
                style={{ width: "100%", height: 100, marginTop: 10 }}
                selectedValue={selectedColor}
                onValueChange={(itemValue, itemIndex) => {
                    let valueTemp = { ...value };
                    valueTemp[field] = itemValue;
                    setData(valueTemp);
                    setSelectedColor(itemValue);
                }}
            >
                {arrColor.map((e) => {
                    return <Picker.Item label={e} value={e} />;
                })}
            </Picker>
        </View>
    );
};