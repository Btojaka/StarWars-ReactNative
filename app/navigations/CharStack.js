import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Characters from '../screens/Characters';
import Infochar from '../screens/Infochar';


const Stack = createStackNavigator();

export default function CharStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='characters'
                component={Characters}
                options={{title: 'Characters'}} 
            />
            <Stack.Screen
                name='info'
                component={Infochar}
                options={{title: 'Information'}}
            />
        </Stack.Navigator>
    );
}