import React, { useEffect,useState} from "react";
import {
    Animated,
    View,
    Text,
    LayoutAnimation,
    UIManager,
    Platform
} from "react-native";

import { CheckBoxView } from './Checkbox';
import { styleImageList } from '../Styles/style';
import PickerNumber from './PickerNumber';
import PickerColor from './PickerColor';


  

export default BoderView = ({value, setData}) => {

    if (
        Platform.OS === "android" &&
        UIManager.setLayoutAnimationEnabledExperimental
      ) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const [state, setState] = useState(0);


    return (
        <View style={{width: "100%"}}>
            <View style={styleImageList.viewTitle}>
                <Text>Boder</Text>
            </View>
            <CheckBoxView  title="Border" state={state} setState={setState}  />
            {
                (state % 2 !== 0) ? 
                <Animated.View style={{flexDirection: 'row'}}>
                    <PickerNumber value={value} setData={setData} title="Border Width:" field="borderWidth" limitSize={1.0} count={0.1} number={0.0} />
                    <PickerColor value={value} setData={setData} title="Border Color:" field="borderColor"/>
                </Animated.View>
                : 
                <Animated.View></Animated.View>
            }
        </View>
    )
}