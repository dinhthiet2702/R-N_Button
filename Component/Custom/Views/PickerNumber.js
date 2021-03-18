import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text
} from "react-native";

import { Picker } from "@react-native-picker/picker";
import { useEffect } from "react";






export default PickerNumber = ({
    value,
    setData,
    title,
    field,
    limitSize,
    count,
    number,
    field_2,
    sizeG = {},
    setSizeG,
}) => {


    const [arrNumber, setArrNumber] = useState([]);
    const [selectNumber, setNumberLanguage] = useState(0);

    // let tempArr = []
    //     for (var i = number; i <= limitSize; i = i + count) {
    //         tempArr.push(i);
    //     }
    // setArrNumber(tempArr);


    useEffect(() => {
        let tempArr = []
        for (var i = number; i <= limitSize; i = i + count) {
            tempArr.push(Number((i).toFixed(1)));
        }
        setArrNumber(tempArr);
    }, []);






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
            {
                Object.keys(sizeG).length > 0 ?
                    <Picker
                        itemStyle={{ width: "50%", height: 100, fontSize: 15 }}
                        style={{ width: "100%", height: 100, marginTop: 10 }}

                        selectedValue={sizeG[field_2] ? sizeG[field_2] : selectNumber}
                        onValueChange={(itemValue, itemIndex) => {
                            
                            let sizeTemp = { ...sizeG };
                            let valueTemp = { ...value };
                            setNumberLanguage(itemValue);
                            sizeTemp[field_2] = itemValue;
                            setSizeG(sizeTemp);
                            valueTemp[field] = sizeTemp;
                            setData(valueTemp);
                        }}
                    >
                        {arrNumber.map((e, index) => {
                            return <Picker.Item key={e} label={e.toString()} value={e} />;
                        })}
                    </Picker> :
                    <Picker
                        itemStyle={{ width: "50%", height: 100, fontSize: 15 }}
                        style={{ width: "100%", height: 100, marginTop: 10 }}

                        selectedValue={value[field] ? value[field] : selectNumber}
                        onValueChange={(itemValue, itemIndex) => {

                            let valueTemp = { ...value };
                            valueTemp[field] = itemValue;
                            setData(valueTemp);
                            console.log('value', valueTemp);
                        }}
                    >
                        {arrNumber.map((e, index) => {
                            return <Picker.Item key={e} label={e.toString()} value={e} />;
                        })}
                    </Picker>
            }

        </View>
    );
};