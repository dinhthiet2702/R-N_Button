import React, { useState} from "react";
import {
    StyleSheet,
    View,
    Text
} from "react-native";

import { Picker } from "@react-native-picker/picker";

export default PickerNumber = ({
    value,
    setData,
    title,
    field,
    limitSize,
    count,
    number,
}) => {
    const [selectNumber, setNumberLanguage] = useState();

    let arrNumber = [];

    for (var i = number; i <= limitSize; i = i + count) {
        arrNumber.push(i);
    }
    return (
        <View
            style={{
                marginTop: 10,
                flexDirection: "row",
                width: "50%",
                alignItems: "center",
                justifyContent: "space-between",
                borderColor: "grey",
                borderWidth: 0.5,
            }}
        >
            <Text style={{ width: "40%", marginLeft: 10 }}>{title} </Text>
            <Picker
                itemStyle={{ width: "50%", height: 100, fontSize: 15 }}
                style={{ width: "100%", height: 100, marginTop: 10 }}
                selectedValue={selectNumber}
                onValueChange={(itemValue, itemIndex) => {
                    let valueTemp = { ...value };
                    valueTemp[field] = parseInt(itemValue);
                    setData(valueTemp);
                    setNumberLanguage(itemValue);
                }}
            >
                {arrNumber.map((e, index) => {
                    return <Picker.Item label={e.toString()} value={e} />;
                })}
            </Picker>
        </View>
    );
};