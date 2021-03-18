import React from "react";

import {
    TouchableOpacity,
    Image,
    Text,

} from "react-native";

import {styleImageList} from '../Styles/style';

export const ItemScrollView = ({setSelectedImage, setCount, setData, value, e}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setSelectedImage(e);
        setCount(0);
        let valueTemp = { ...value };
        valueTemp.imageSource = e.source;
        setData(valueTemp);
        
      }}
      key={e.name}
      style={styleImageList.scrollViewItemTouchable}
    >
      <Image key={e.name} style={{ width: 30, height: 30 }} source={e.source} />
      <Text>{e.name}</Text>
    </TouchableOpacity>
  );
};
