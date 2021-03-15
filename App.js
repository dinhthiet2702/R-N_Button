/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import BaseNav from './BaseComponent/BaseNavigation'

const App = () => {
  return (
    <BaseNav />

  );
};

const styles = StyleSheet.create({


});

export default connect(state => {
  return {
    listBtn: state.data
  }
})(App);
