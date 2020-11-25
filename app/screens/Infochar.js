import { Button, StyleSheet, Text, View, Navigator } from 'react-native';
import Container from './Container'; 
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';





export default class Infochar extends React.Component {
    

    render() {
        return (
            <View style={styles.text}>
            <Text>CHARACTER INFO: </Text>
            
            <Button
                title="Back"
                onPress={() => this.props.navigation.navigate('characters')}
            />
            </View>
        );
    }
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