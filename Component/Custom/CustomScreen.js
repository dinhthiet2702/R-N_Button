import React, { useState, useEffect } from "react";
import Header from "../../BaseComponent/Header";
import Logo from '../../assets/abc.svg';


import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Image,
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

import ViewShadow from './Views/ShadowView';



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
        color: "white",
        fontSize: 15,
        borderWidth: 0,
        borderColor: 'red',
        fontWeight: 500,
        shadowColor: "#000",
        shadowOffset:  {
             width: 0,
            height: 0,
        },
        shadowOpacity: 0,
        shadowRadius:0,
        positionIcon: [],
        imageSource: require('../../assets/push-button.png'),
        template: null
    });


    const pressClick = () => {

        if (dataNavi && Object.keys(dataNavi).length > 0) {
            updateButton(valueText);
            navigation.navigate("Edit");
        }
        else {
            const indexEnd = agrs.listBtn.length;
            let valueTemp = { ...valueText };
            valueTemp.id = indexEnd;
            valueTemp.fontWeight = valueText.fontWeight?.toString();
            addButton(valueTemp);
            navigation.navigate("Edit");
            
        }
        // else{
        //     objBtn = {};
        // }

        setValueText({});
        setdataNavi({});
        console.log('value', valueText);

    };


    useEffect(() => {


        if (data && Object.keys(data).length > 0) {
            setValueText(data);
            setdataNavi(data);
        }

    }, [route.params]);


    const ViewPreview = ({ valueText }) => {

        const [btn, setBtn] = useState({});

        useEffect(() => {
            setBtn(valueText);
            

        }, [valueText])

        return (
            <View style={{ width: "100%", height: 200, borderColor: 'blue', borderWidth: 0.5, alignItems: 'center', justifyContent: 'center' }}>
                <View
                    style={{
                        width: btn.width ? btn.width : 50,
                        height: btn.height ? btn.height : 20,
                        backgroundColor: btn.backgroundColor ? btn.backgroundColor : 'red',
                        borderRadius: btn.radius ? btn.radius : 0,
                        alignItems: 'center', justifyContent: 'center',
                        flexDirection: 'row',
                        borderWidth: btn.borderWidth ? btn.borderWidth : 0,
                        borderColor: btn.borderColor ? btn.borderColor : 'red',
                        shadowColor: btn.shadowColor ? btn.shadowColor : 'white',
                        shadowOffset: btn.shadowOffset ? btn.shadowOffset : {width: 0, height: 0},
                        shadowOpacity: btn.shadowOpacity ? btn.shadowOpacity : 0,
                        shadowRadius: btn.shadowRadius ? btn.shadowRadius : 0,
                        elevation: 5,

                    }}>

                    {
                        (btn.positionIcon?.findIndex(item => item === "Left") !== -1) ?
                            <Image
                                style={{ marginLeft: 5, width: 20, height: 20 }}
                                source={btn.imageSource} /> 
                        : <Image />
                    }
                    <Text
                        style={{
                            color: btn.color ? btn.color.toString() : 'white',
                            fontWeight: btn.fontWeight ? btn.fontWeight.toString() : '100',
                            fontSize: btn.fontSize ? btn.fontSize : 10
                        }}>{btn.name}</Text>

                    {
                        (btn.positionIcon?.findIndex(item => item === "Right") !== -1) ? <Image style={{ marginRight: 5, width: 20, height: 20 }} source={btn.imageSource}></Image> : <Image />
                    }


                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <Header title="Custom" />

            <ViewPreview valueText={valueText} />

            <ScrollView>
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        flexDirection: "column",
                        margin: 10,
                    }}
                >


                    <PickerSizeCustom title="Size" valueText={valueText} setValueText={setValueText} />



                    <InputText valueText={valueText} setData={setValueText} title="Name" field="name" />


                    <PickerFontCutom title="Font" valueText={valueText} setValueText={setValueText} />



                    <View style={styleImageList.viewTitle}>
                        <Text>Color</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <PickerColor value={valueText} setData={setValueText} title="Button Color:" field="backgroundColor" />
                        <PickerColor value={valueText} setData={setValueText} title="Title Text:" field="color" />
                    </View>





                    <View style={styleImageList.viewTitle}>
                        <Text>Image</Text>
                    </View>

                    <ListImage setData={setValueText} value={valueText} />

                    <BorderView setData={setValueText} value={valueText} />


                    <ViewShadow title="Shadow" valueText={valueText} setValueText={setValueText} />


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
