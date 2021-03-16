import React from "react";
import { useEffect } from "react";

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    LayoutAnimation,
    UIManager,
    Platform,

} from "react-native";

export const CheckBoxView = ({ title, state, setState, value={}, setValue}) => {

    useEffect(() => {

        if (Object.keys(value).length === 0){

        }
        else{
            let tempValue = { ...value };
            let tempPositionIcon = tempValue.positionIcon;

            if (state % 2 !== 0) {

                const tempPositionIconN = [...tempPositionIcon, title];
                tempValue.positionIcon = tempPositionIconN;
                setValue(tempValue);


            }
            else {

                const tempPositionIconNN = tempPositionIcon.filter(item => item !== title);
                tempValue.positionIcon = tempPositionIconNN;
                setValue(tempValue);

            }
        }

        

    }, [state]);
    return (
        <View style={{ flexDirection: "column", alignItems: "center", marginTop: 10 }}>
            <Text>{title}</Text>
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                    setState(state + 1);
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                }}
                style={{
                    width: 25,
                    height: 25,
                    borderWidth: 1,
                    alignItems: "center",
                }}
            >
                {state % 2 === 0 || value.positionIcon.findIndex(item => item !== title) !== -1 ? (
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

