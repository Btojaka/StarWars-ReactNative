import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Container from './Container';

const styles = StyleSheet.create({
    item: {
        padding: 20,
        justifyContent: 'center',
        borderColor: 'rgba(255,232,31, .2)',
        borderBottomWidth: 1
    },
    text: {
        color: '#ffe81f',
        fontSize: 18
    }
});

export default function Characters(){
    
        return(
            <Container>
                <Text style={styles.text}>HOME</Text>
            </Container>
        );
    
}