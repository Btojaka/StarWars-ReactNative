import { Button, StyleSheet, Text, View, Navigator } from 'react-native';
import Container from './Container'; 
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native-gesture-handler';





export default function Infochar (props) {
    console.warn(props.navigation);
    return (
                <View > 
                    {/* show this data characters */}
                    <TouchableHighlight>
                        <Text>Show Info Character</Text>
                    </TouchableHighlight>
                    {/* here the image/avatar with the same index name */}
                </View>
    )
    
    
    
}
const styles = StyleSheet.create({
    item: {
        padding: 20,
        justifyContent: 'center',
        borderColor: 'rgba(255,232,31, .2)',
        borderBottomWidth: 1
    },
    text: {
        color: '#ffe81f',
        flex: 1,
        fontSize: 18,
        alignItems: 'center',
        justifyContent: 'center'
        
    }
});