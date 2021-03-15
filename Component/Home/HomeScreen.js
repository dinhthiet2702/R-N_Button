import React, {useEffect, useMemo} from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
  } from 'react-native';

import { connect } from 'react-redux';
import Header from '../../BaseComponent/Header';

const ARRBTN = [
    {
        id:0,
        name: "BUTTON",
        backgroundColor: 'blue',
        radius: 5,
        width: 100,
        height: 50,
        color: 'white',
        fontSize: 17,
        fontWeight: 800,
    },
    {
        id:1,
        name: "BUTTON",
        backgroundColor: 'red',
        radius: 50,
        width: 100,
        height: 100,
        color: 'white',
        fontSize: 17,
        fontWeight: 800,
    },
    {
        id:2,
        name: "BUTTON",
        backgroundColor: 'gray',
        radius: 5,
        width: 100,
        height: 30,
        color: 'white',
        fontSize: 17,
        fontWeight: 800,
    },
    {
        id:3,
        name: "BUTTON",
        backgroundColor: 'gray',
        radius: 5,
        width: 100,
        height: 50,
        color: 'white',
        fontSize: 17,
        fontWeight: 800,
    },
    {
        id:4,
        name: "BUTTON",
        backgroundColor: 'gray',
        radius: 5,
        width: 100,
        height: 50,
        color: 'white',
        fontSize: 17,
        fontWeight: 800,
    },
    {
        id:5,
        name: "BUTTON",
        backgroundColor: 'gray',
        radius: 5,
        width: 100,
        height: 50,
        color: 'white',
        fontSize: 17,
        fontWeight: 800,
    },
    {
        id:6,
        name: "BUTTON",
        backgroundColor: 'gray',
        radius: 5,
        width: 100,
        height: 50,
        color: 'white',
        fontSize: 17,
        fontWeight: 800,
    },

]


const HomeScreen = ({ route, navigation, ...args }) => {
    
    
     console.log('statesssss', args.listBtn)

   
    
    return (
        <SafeAreaView style={{flex:1}}>
        <View style={{ flex: 1}}>
            <Header title="Home"/>
            <ScrollView >
                <View style ={{flexDirection:'row', flexWrap: 'wrap', justifyContent: 'center'}}>
                {
                    ARRBTN.map((e,index) => {
                        return (
                            <View key={e.id.toString()} style = {{width: "35%"}} style={{alignItems: 'center', margin: 10}}>
                                <View style={{width: e.width, height: e.height, borderRadius: e.radius, backgroundColor: e.backgroundColor, justifyContent: 'center', alignItems: 'center'}}>
                                    <Text style={{fontSize: e.fontSize, color: e.color}}>{e.name}</Text>
                                </View>
                            </View>
                                
                        )
                    })
                }
                </View>
            </ScrollView>
        </View>
        </SafeAreaView>
      
    );
} 

export default connect(state => {
    return {
      listBtn: state.data
    }
  }) (HomeScreen);
  



  