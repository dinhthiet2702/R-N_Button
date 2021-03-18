import React, { useEffect,useState} from "react";
import {
    Animated,
    View,
    Text,
    
} from "react-native";

import { CheckBoxView } from './Checkbox';
import { styleImageList } from '../Styles/style';
import PickerNumber from './PickerNumber';
import PickerColor from './PickerColor';


  

export default ShadowView = ({valueText, setValueText, title}) => {

    const [sizeG, setSizeG] = useState({width: 0, height: 0});
    
    return (
        <View style={{ width:"100%" }}>
            <View style={{
                width: "100%",
                height: 20,
                backgroundColor: "gray",
                opacity: 20,
                marginTop: 20,
                alignItems: "center",
            }}
            >
                <Text>{title}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
                <PickerNumber
                    value={valueText}
                    setData={setValueText}
                    title="Shadow Width:"
                    field="shadowOffset"
                    field_2="width"
                    sizeG={sizeG}
                    setSizeG={setSizeG}
                    limitSize={10}
                    number={0}
                    count={1}
                    
                />
                <PickerNumber
                    value={valueText}
                    setData={setValueText}
                    title="Shadow Height:"
                    field="shadowOffset"
                    field_2="height"
                    sizeG={sizeG}
                    setSizeG={setSizeG}
                    limitSize={10}
                    number={0}
                    count={1}
                />
            </View>

            <View style={{ flexDirection: "row" }}>
                <PickerColor title="Shadow color" value={valueText} setData={setValueText} field="shadowColor" />
                <PickerNumber
                    value={valueText}
                    setData={setValueText}
                    title="Shadow Radius:"
                    field="shadowRadius"
                    limitSize={10}
                    number={0}
                    count={1}
                />
                
            </View>

            <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
                
                <PickerNumber
                    value={valueText}
                    setData={setValueText}
                    title="Shadow Opacity:"
                    field="shadowOpacity"
                   
                    limitSize={1}
                    number={0}
                    count={0.1}
                />
                
            </View>
            
        </View>
    )
    


    
}