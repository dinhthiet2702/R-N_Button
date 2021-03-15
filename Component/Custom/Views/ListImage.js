import React, { useState} from "react";
import {
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity
} from "react-native";


import { CheckBoxView } from './Checkbox';

import {styleImageList} from '../Styles/style';

import {ItemScrollView} from './ItemScrollView';

import { arrImage } from '../../../Const/const';

export const ListImage = ({ setData, value }) => {


    const [count, setCount] = useState(0);
    const [countR, setCountR] = useState(0);
    const [countL, setCountL] = useState(0);
    const [imageSelected, setSelectedImage] = useState({
        name: "Plus color",
        source: require('../../../assets/push-button.png'),
    });

    return (
        <View style={{ flexDirection: "column", width: "100%" }}>
            <View style={styleImageList.viewCheckBox}>
                <CheckBoxView title="Right" state={countR} setState={setCountR} />
                <CheckBoxView title="Left" state={countL} setState={setCountL} />
            </View>
            <View style={styleImageList.viewContainer}>
                <Image style={{ width: 30, height: 30 }} source={imageSelected.source}/>
                <Text>{imageSelected.name}</Text>
                <TouchableOpacity style={{ width: 20, height: 20, marginRight: 20 }}
                    onPress={() => {
                        setCount(count + 1);
                    }}
                >
                    <Image style={{ width: 20, height: 20 }} source={require('../../../assets/iconDrop/drop.png')}/>
                </TouchableOpacity>
            </View>
            {count % 2 === 0 ? (
                <View></View>
            ) : (
                <ScrollView style={styleImageList.scrollViewStyle}>
                    {arrImage.map((e, index) => {
                        return (
                            <ItemScrollView setData={setData} setSelectedImage={setSelectedImage} setCount={setCount} value={value} e={e} />
                        );
                    })}
                </ScrollView>
            )}
        </View>
    );
};