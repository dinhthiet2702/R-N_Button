import React, { useState} from "react";
import {
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    LayoutAnimation,
    UIManager,
    Platform,
} from "react-native";


import { CheckBoxView } from './Checkbox';

import {styleImageList} from '../Styles/style';

import {ItemScrollView} from './ItemScrollView';

import { arrImage } from '../../../Const/const';

export const ListImage = ({ setData, value }) => {

    if (
        Platform.OS === "android" &&
        UIManager.setLayoutAnimationEnabledExperimental
      ) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }


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
                
                <CheckBoxView value={value} setValue={setData} title="Left" state={countL} setState={setCountL} />
                <CheckBoxView value={value} setValue={setData} title="Right" state={countR} setState={setCountR} />

            </View>
            <View style={styleImageList.viewContainer}>
                <Image style={{ width: 30, height: 30 }} source={imageSelected.source}/>
                <Text>{imageSelected.name}</Text>
                <TouchableOpacity style={{ width: 20, height: 20, marginRight: 20 }}
                    onPress={() => {
                        setCount(count + 1);
                        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
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
                            <ItemScrollView key={e.source.toString()} setData={setData} setSelectedImage={setSelectedImage} setCount={setCount} value={value} e={e} />
                        );
                    })}
                </ScrollView>
            )}
        </View>
    );
};