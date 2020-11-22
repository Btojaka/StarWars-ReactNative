import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, 
  Text, 
  View, 
  FlatList,
  TouchableHighlight 
} from 'react-native';
//import { createStackNavigator } from '@react-navigation/stack';
//import Characters from './components/Characters';
import Container from './Container';


const styles = StyleSheet.create({
  item: {
    padding: 20,
    justifyContent: 'center',
    borderColor: 'rgba(255,232,31, .2)',
    borderBottomWidth: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffe81f',
    fontSize: 18
  }
});


