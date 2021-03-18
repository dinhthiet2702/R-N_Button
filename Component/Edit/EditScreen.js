

import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Button,
  Touchable,
  Image,
} from 'react-native';


import { connect } from 'react-redux';
import Header from '../../BaseComponent/Header';
import { DeleteButton } from '../../Redux/Reduce+Action+State';

const EditScreen = ({ navigation, ...value }) => {

  const listBtn = value.listBtn;

  goToEdit = (btn) => {
    navigation.navigate('Custom', { btn });
  }
  const deleteBtn = value.deleteButton;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Header title="Edit" />
        <ScrollView >
          <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
            {
              (listBtn && Object.keys(listBtn).length > 0) ? listBtn.map((e, index) => {
                
                return (
                  <View
                    key={e.id.toString()}
                    style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                    {
                      (e.positionIcon.length > 0) ?
                        <View style={{ width: "35%" }} style={{ alignItems: 'center', margin: 10 }}>
                          <TouchableOpacity onPress={() => alert('This is Button Custom')}
                            style={{
                              width: e.width,
                              height: e.height,
                              borderRadius: e.radius,
                              backgroundColor: e.backgroundColor,
                              borderColor: e.borderColor, borderWidth: e.borderWidth,
                              justifyContent: 'center',
                              alignItems: 'center',
                              flexDirection: 'row',
                              shadowColor: e.shadowColor,
                              shadowOffset: e.shadowOffset,
                              shadowOpacity: e.shadowOpacity,
                              shadowRadius: e.shadowRadius,

                              elevation: 5,
                            }}>
                            {

                              (e.positionIcon.findIndex(item => item === "Left") !== -1) ? <Image style={{ marginLeft: 5, width: 20, height: 20 }} source={e.imageSource}></Image> : <Image></Image>
                            }
                            <Text style={{ color: e.color.toString(), fontSize: e.fontSize, fontWeight: e.fontWeight.toString() }}>{e.name}</Text>

                            {
                              (e.positionIcon.findIndex(item => item === "Right") !== -1) ? <Image style={{ marginRight: 5, width: 20, height: 20 }} source={e.imageSource}></Image> : <Image></Image>
                            }

                          </TouchableOpacity>
                        </View>
                        : <TouchableOpacity
                          onPress={() => alert('This is Button Custom')}
                          style={{
                            width: "35%",
                            alignItems: 'center',
                            margin: 10,
                            shadowColor: e.shadowColor,
                            shadowOffset: e.shadowOffset,
                            shadowOpacity: e.shadowOpacity,
                            shadowRadius: e.shadowRadius,

                            elevation: 5,
                          }}>
                          <View style={{
                            width: e.width,
                            height: e.height,
                            borderRadius: e.radius,
                            backgroundColor: e.backgroundColor,
                            borderColor: e.borderColor,
                            borderWidth: e.borderWidth,
                            justifyContent: 'center',
                            alignItems: 'center'
                          }}>
                            <Text style={{ color: e.color.toString(), fontSize: e.fontSize, fontWeight: e.fontWeight.toString() }}>{e.name}</Text>
                          </View>
                        </TouchableOpacity>
                    }
                    <View><Text>|</Text></View>
                    <View style={{ flexDirection: 'row' }}>
                      <TouchableOpacity onPress={() => goToEdit(e)} style={{ borderRadius: 10, width: 50, height: 40, alignItems: 'center', backgroundColor: 'green', justifyContent: 'center', marginRight: 10 }}><Text>Edit</Text></TouchableOpacity>
                      <TouchableOpacity onPress={() => deleteBtn(e)} style={{ borderRadius: 10, width: 50, height: 40, alignItems: 'center', backgroundColor: 'red', justifyContent: 'center', marginRight: 10 }}><Text>Delete</Text></TouchableOpacity>
                    </View>
                  </View>
                )
              }) : <View></View>
            }
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );


}

export default connect(
  state => {
    return {
      listBtn: state.data,
    }
  },
  dispath => {
    return {
      deleteButton: (obj) => dispath(DeleteButton(obj)),
    }
  }
)(EditScreen);