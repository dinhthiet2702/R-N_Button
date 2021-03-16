import React, { useState, useEffect} from "react";
import Header from "../../BaseComponent/Header";

import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
} from "react-native";

import { AppendButton, UpdateButton } from "../../Redux/Reduce+Action+State";

import { connect } from "react-redux";




import { ListImage } from './Views/ListImage';

import InputText from './Views/InputText';

import PickerColor from './Views/PickerColor';

import PickerSizeCustom from './Views/PickerSizeCustom';

import PickerFontCutom from './Views/PickerFontCustom';

import ButtonView from './Views/ButtonView';

import { styleImageList } from "./Styles/style";

import BorderView from "./Views/BorderView";


const CustomButtonScreen = ({ route, navigation, ...agrs }) => {

    const addButton = agrs.addButton;
    const updateButton = agrs.updateButton;

    const data = route.params?.btn;


    const [dataNavi, setdataNavi] = useState(data);


    const [valueText, setValueText] = useState({
        id: 0,
        name: "",
        backgroundColor: "red",
        radius: 0,
        width: 0,
        height: 0,
        color: "red",
        fontSize: 10,
        borderWidth: 0,
        borderColor: 'red',
        fontWeight: 100,
        positionIcon: [],
        imageSource: null,
    });

    const pressClick = () => {

        if (dataNavi && Object.keys(dataNavi).length > 0){
            updateButton(valueText);
            navigation.navigate("Edit");
        }
        else{
            const indexEnd = agrs.listBtn.length;
            let valueTemp = { ...valueText };
            valueTemp.id = indexEnd;
            valueTemp.fontWeight = valueText.fontWeight.toString();
            addButton(valueTemp);
            navigation.navigate("Edit");
            console.log('ahhaaka', valueText);
        }
        // else{
        //     objBtn = {};
        // }
        setValueText({});
        setdataNavi({});
        
        
    };


    useEffect(() => {


        if (data && Object.keys(data).length > 0){
            setValueText(data);
            setdataNavi(data);
        }

    }, [route.params]);

    return (
        <SafeAreaView style={{ flex: 1,  }}>
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
                    <InputText valueText={valueText} setData={setValueText} title="Name" field="name"/>

                    <View style={styleImageList.viewTitle}>
                        <Text>Color</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <PickerColor  value={valueText} setData={setValueText} title="Button Color:" field="backgroundColor"/>
                        <PickerColor value={valueText} setData={setValueText} title="Title Text:" field="color"/>
                    </View>


                    <PickerSizeCustom  title="Size" valueText={valueText} setValueText={setValueText} />

                    <PickerFontCutom  title="Font" valueText={valueText} setValueText={setValueText} />


                    <View style={styleImageList.viewTitle}>
                        <Text>Image</Text>
                    </View>

                    <ListImage setData={setValueText} value={valueText} />

                    <BorderView setData={setValueText} value={valueText} />

                    {dataNavi && Object.keys(dataNavi).length > 0 ? (
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
            updateButton: (obj) => dispath(UpdateButton(obj))
        };
    }
)(CustomButtonScreen);
