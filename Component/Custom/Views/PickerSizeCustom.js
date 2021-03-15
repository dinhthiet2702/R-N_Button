import React from "react";
import { View, Dimensions, Text } from "react-native"

const widthLimit = Dimensions.get("window").width - 150;
const heightLimit = 50;

export default PickerSizeCustom = ({ title, valueText, setValueText }) => {
    return (
        <View style={{ width: "100%", alignItems: 'center' }}>
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
                <Text>{title}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
                <PickerNumber
                    value={valueText}
                    setData={setValueText}
                    title="Width:"
                    field="width"
                    limitSize={widthLimit}
                    number={30}
                    count={10}
                />
                <PickerNumber
                    value={valueText}
                    setData={setValueText}
                    title="Height:"
                    field="height"
                    limitSize={heightLimit}
                    number={20}
                    count={10}
                />
            </View>

            <PickerNumber
                value={valueText}
                setData={setValueText}
                title="Radius:"
                field="radius"
                limitSize={25}
                number={5}
                count={2}
            />
        </View>
    )
}