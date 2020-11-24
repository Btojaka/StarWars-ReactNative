import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, StyleSheet } from "react-native";
import 'react-native-gesture-handler';
import Characters from './components/Characters';
import Infochar from './components/Infochar';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="CharactersScreen"
            component={Characters}
          />
          <Stack.Screen
            name="InfocharScreen"
            component={Infochar}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

