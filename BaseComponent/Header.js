import React, {useEffect} from 'react';

import {
    
    View,
    Text,
   
  } from 'react-native';

const Header = ({title}) => {
    return (
        <View style={{width: "100%", alignItems: 'center', justifyContent: 'center', height: 55, borderBottomColor: 'grey', borderBottomWidth: 0.5}}>
            <Text style={{fontSize: 17}}>{title}</Text>
            
        </View>
    )
}

export default Header;
