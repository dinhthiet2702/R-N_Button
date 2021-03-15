import React, { useState, useEffect, useMemo, useCallback } from "react";
import Header from "../../BaseComponent/Header";

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
} from "react-native";

import { AppendButton } from "../../Redux/Reduce+Action+State";

import { connect } from "react-redux";




import { ListImage } from './Views/ListImage';

import InputText from './Views/InputText';

import PickerColor from './Views/PickerColor';


import PickerSizeCustom from './Views/PickerSizeCustom';

import PickerFontCutom from './Views/PickerFontCustom';

import ButtonView from './Views/ButtonView';


const CustomButtonScreen = ({ route, navigation, ...agrs }) => {
    const objBtn = route.params?.btn;

    console.log("func", objBtn);

    const addButton = agrs.addButton;

    const [valueText, setValueText] = useState({
        id: 0,
        name: "",
        backgroundColor: "",
        radius: 0,
        width: 0,
        height: 0,
        color: "",
        fontSize: 0,
        fontWeight: 0,
    });

    const pressClick = () => {

        const indexEnd = agrs.listBtn.length;
        let valueTemp = { ...valueText };
        valueTemp.id = indexEnd;
        valueTemp.fontWeight = valueText.fontWeight.toString();
        addButton(valueTemp);
        navigation.navigate("Home");
    };

    useEffect(() => { }, [route.params]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header title="Custom" />

            <ScrollView>
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        flexDirection: "column",
                        margin: 10,
                    }}
                >
                    <InputText
                        valueText={valueText}
                        setData={setValueText}
                        title="Name"
                        objBtn={objBtn}
                        field="name"
                    />

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
                        <Text>Color</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <PickerColor
                            value={valueText}
                            setData={setValueText}
                            title="Button Color:"
                            field="backgroundColor"
                        />
                        <PickerColor
                            value={valueText}
                            setData={setValueText}
                            title="Title Text:"
                            field="color"
                        />
                    </View>


                    <PickerSizeCustom title="Size" valueText={valueText} setValueText={setValueText} />

                    <PickerFontCutom title="Font" valueText={valueText} setValueText={setValueText} />


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
                        <Text>Image</Text>
                    </View>

                    <ListImage setData={setValueText} value={valueText} />


                    {objBtn && Object.keys(objBtn).length > 0 ? (
                        <ButtonView title="Update" pressClick={pressClick} />
                    ) : (
                        <ButtonView title="Create" pressClick={pressClick} />
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default connect(
    (state) => {
        return {
            listBtn: state.data,
        };
    },
    (dispath) => {
        return {
            addButton: (obj) => dispath(AppendButton(obj)),
        };
    }
)(CustomButtonScreen);
