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
            <Text style={{ width: "30%", marginLeft: 10 }}>{title}: </Text>
            <TextInput
                defaultValue={`${valueText[field]
                        ? valueText[field]
                        : ""
                    }`}
                placeholder="input text"
                style={styles.inputText}
                keyboardType="number-pad"
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
        width: "60%",
        height: 40,
        borderRadius: 10,
        paddingLeft: 10,
        borderColor: "grey",
        borderWidth: 1,
    },
});