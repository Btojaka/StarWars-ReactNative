import React from 'react';
import { StyleSheet, View } from 'react-native';
import { color } from 'react-native-reanimated';

/* we will use this component as a wrapper for our views. 
    It will be strictly used for styling.*/
    
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffe81f',
    borderColor: 'rgba(255,232,31, .2)',
    
}
});

const Container = ({ children }) => ( 
<View style={styles.container}>
    {children} 
</View>
)

export default Container;