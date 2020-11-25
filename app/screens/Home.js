import React from 'react';
import { View, Text, FlatList, StyleSheet,TouchableHighlight } from "react-native";
import Container from './Container';

export default function Home() {
    return(
        <Container>
            <Text style={styles.text}>MAY THE FORCE BE WITH YOU</Text>
        </Container>
    );
}
const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        backgroundColor: '#ffe81f',
        color: 'black',
        borderColor: 'rgba(255,232,31, .2)',
        
    }
    })