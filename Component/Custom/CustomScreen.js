
import React, {useState, useEffect, useMemo, useCallback} from 'react';
import Header from '../../BaseComponent/Header';



import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    TextInput,
    Dimensions,
  } from 'react-native';

import {AppendButton, DeleteButton} from '../../Redux/Reduce+Action+State';

import { connect } from 'react-redux';

import {Picker} from '@react-native-picker/picker';



const InputText = ({title, field, setData, objBtn, valueText}) => {
        

  
    return (
        <View style={{ flexDirection:'row', alignItems: 'center', width: "100%", marginTop: 10,}}>
            <Text style={{width: "20%", marginLeft: 10}}>{title}: </Text>
            <TextInput 
                defaultValue =  {`${(objBtn && Object.keys(objBtn).length > 0) ? objBtn[field]: valueText[field] || ""}`}
                placeholder="input text" style={styles.inputText} 
                onChangeText = {(text)=> {
                let valueTemp = {...valueText};
                
                if (parseInt(text) == text){
                    valueTemp[field] = parseInt(text);
                }
                else{
                    
                    valueTemp[field] = text;
                }
                setData(valueTemp);
                console.log('aadasdsadas', valueTemp);
            }}
            />
        </View>
    )
}

const PickerT = ({value, setData, title, field}) => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    return (
            <View style={{flexDirection: 'row', width:"100%", alignItems: 'center', justifyContent: 'space-between', borderWidth: 0.5, borderColor: 'grey', marginTop: 10}}>
                <Text style={{width: "40%", marginLeft: 10}}>{title} </Text>
                <Picker itemStyle={{width: "50%", height: 100, fontSize: 15}}
                style = {{width: "100%", height: 100, marginTop: 10}}
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>{

                    let valueTemp = {...value};
                    valueTemp[field] = itemValue;
                    setData(valueTemp);
                    setSelectedLanguage(itemValue)

                }}>
                    <Picker.Item  label="Red" value="red" />
                    <Picker.Item label="Blue" value="blue" />
                    <Picker.Item label="Black" value="black" />
                    <Picker.Item label="Yellow" value="yellow" />
                    <Picker.Item label="Green" value="green" />
                    <Picker.Item label="Purple" value="purple" />
                    <Picker.Item label="Pink" value="pink" />
                    <Picker.Item label="Aqua" value="aqua" />
                </Picker>
            </View>
            
    )
}

const PickerNumber = ({value, setData, title, field}) => {
    const [selectNumber, setNumberLanguage] = useState();

    let arrNumber = [];

    const widthLimit =  Dimensions.get('window').width - 150;

    for (var i = 20; i <= widthLimit; i = i + 30){
        arrNumber.push(i);
    }
    return (
        <View style={{marginTop: 10,flexDirection: 'row', width:"100%", alignItems: 'center', justifyContent: 'space-between', borderColor: 'grey', borderWidth: 0.5}}>
            <Text style={{width: "40%", marginLeft: 10}}>{title} </Text>
            <Picker itemStyle={{width: "50%", height: 100, fontSize: 15}}
                style = {{width: "100%", height: 100, marginTop: 10}}
                selectedValue={selectNumber}
                onValueChange={(itemValue, itemIndex) =>{

                    let valueTemp = {...value};
                    valueTemp[field] = parseInt(itemValue);
                    setData(valueTemp);
                    setNumberLanguage(itemValue);

                }}>
                {
                    arrNumber.map ((e, index)=> {
                        return (
                            <Picker.Item  label={e.toString()} value={e} />
                        )
                    })
                }
            </Picker>
        </View>
    )
}

const CustomButtonScreen = ({route, navigation, ...agrs }) => {

    const objBtn = route.params?.btn;

    console.log('func', objBtn);

    const addButton = agrs.addButton;

    const [valueText, setValueText] = useState({
        id:0,
        name: "",
        backgroundColor: '',
        radius: 0,
        width: 0,
        height: 0,
        color: '',
        fontSize: 0,
        fontWeight: 0,
    });

    

    const pressClick = () => {
        // if {
            
        // }
        // else{
            const indexEnd = agrs.listBtn.length;
            const windowWidth = Dimensions.get('window').width;
            let valueTemp = {...valueText};
            valueTemp.id = indexEnd;

            const widthValue = valueTemp.width;
            

            if (widthValue > windowWidth){
                valueTemp.width = windowWidth - 150;
            }

            addButton(valueTemp);
            
        // }
        
        navigation.navigate('Home');
    }

    useEffect (()=>{


    }, [route.params])

    
    return (
        <SafeAreaView style={{flex:1}}>
            <Header title="Custom" />
            <ScrollView>

            <View style={{ flex: 1, alignItems: 'center', flexDirection: 'column', margin: 10}}>
                
                <InputText valueText = {valueText} setData = {setValueText}  title="Name" objBtn={objBtn} field="name" />
                <PickerT value={valueText} setData={setValueText} title="Background Color:" field="backgroundColor"  />
                {/* <InputText title="Radius" objBtn={objBtn} field="radius" valueText = {valueText} setData = {setValueText} /> */}

                

                <PickerNumber value={valueText} setData={setValueText} title="Width:" field="width"  />

                <PickerNumber value={valueText} setData={setValueText} title="Height:" field="height"  />

                <PickerNumber value={valueText} setData={setValueText} title="Radius:" field="radius"  />

                {/* <InputText title="Height"  field="height" setData = {setValueText} objBtn={objBtn} valueText={valueText}/> */}

                <PickerT value={valueText} setData={setValueText} title="Color Text:" field="color"  />
                <InputText title="Font Size"  field="fontSize" setData = {setValueText} objBtn={objBtn} valueText={valueText}/>
                <InputText title="Font Weight"  field="fontWeight" setData = {setValueText} objBtn={objBtn} valueText={valueText}/> 
                {
                    (objBtn && Object.keys(objBtn).length > 0) ? 
                    <View style={{width: "70%", height: 50, alignItems: 'center'}}>
                        <TouchableOpacity 
                            onPress={pressClick} 
                            style={{alignItems: 'center', width: "100%", alignItems:'center', justifyContent: 'center', marginTop: 10, backgroundColor: 'green', borderRadius: 20, height: 40}}>
                                <Text> Update </Text>
                        </TouchableOpacity>
                    </View>
                     : <TouchableOpacity 
                            onPress={pressClick} 
                            style={{alignItems: 'center', width: "70%", alignItems:'center', justifyContent: 'center', marginTop: 10, backgroundColor: 'green', borderRadius: 20, height: 40}}>
                            <Text> Create </Text>
                    </TouchableOpacity>
                }   
            </View>

            </ScrollView>
            
        
        </SafeAreaView>
    );
    
}



    




const styles = StyleSheet.create({

    inputText:{
        
        width: "70%",
        height: 40,
        borderRadius: 10,
        paddingLeft:10,
        borderColor: 'grey',
        borderWidth: 1,
    }


});

export default connect(
    state => {
        return {
            listBtn: state.data
        }
    },
    dispath => {
        return {
            addButton : (obj) => dispath(AppendButton(obj)),
        }
    }) 
(CustomButtonScreen);
  
  