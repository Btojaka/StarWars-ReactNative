import React from 'react';
import { Button, StyleSheet, Text, View, Navigator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import CharStack from './CharStack';
import Home from '../screens/Home';
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();

export default function Navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName='home'
            tabBarOptions={{
                inactiveTintColor:'#646464',
                activeTintColor: '#00a680'
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => screenOptions(route, color),
            })}
            >
                <Tab.Screen 
                name='home' 
                component={Home}
                options={{ title: 'HOME'}}/>

                <Tab.Screen 
                name='characters' 
                component={CharStack} // Stack of Characters and info
                options={{ title: 'CHARACTERS' }}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

function screenOptions( route, color ) {
    let iconName;

    switch (route.name) {
        case 'home':
            iconName = 'compass-outline';
            break;
        case 'characters':
            iconName = 'star-outline';
            break;
        default:
            break;
    }
    return(
        <Icon type='material-comunity' name={iconName} size={22} color={color} />
    );
}