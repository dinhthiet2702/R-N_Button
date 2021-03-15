import React from "react";
import {

    StyleSheet,
    TextInput,
    View,
    Text
    
} from "react-native";

export default InputText = ({ title, field, setData, objBtn, valueText }) => {
    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                marginTop: 10,
            }}
        >
            <Text style={{ width: "20%", marginLeft: 10 }}>{title}: </Text>
            <TextInput
                defaultValue={`${objBtn && Object.keys(objBtn).length > 0
                        ? objBtn[field]
                        : valueText[field] || ""
                    }`}
                placeholder="input text"
                style={styles.inputText}
                onChangeText={(text) => {
                    let valueTemp = { ...valueText };

                    if (parseInt(text) == text) {
                        valueTemp[field] = parseInt(text);
                    } else {
                        valueTemp[field] = text;
                    }
                    setData(valueTemp);
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputText: {
        width: "70%",
        height: 40,
        borderRadius: 10,
        paddingLeft: 10,
        borderColor: "grey",
        borderWidth: 1,
    },
});