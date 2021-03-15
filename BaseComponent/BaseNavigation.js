import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../Component/Home/HomeScreen';
import CustomButtonScreen from '../Component/Custom/CustomScreen';
import EditScreen from '../Component/Edit/EditScreen';






const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const TabNavigation = () =>{
    return(
        <NavigationContainer independent={true}>
            <Tabs.Navigator>
                <Tabs.Screen name="Home" component={HomeScreen} />
                <Tabs.Screen name="Custom" component={CustomButtonScreen} />
                <Tabs.Screen name="Edit" component={EditScreen} />
            </Tabs.Navigator>
        </NavigationContainer>
    );
}


const BaseNav = () => {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen  name="Root" component={TabNavigation}/>
        </Stack.Navigator>
        
      </NavigationContainer>
    );
  }
export default BaseNav;
