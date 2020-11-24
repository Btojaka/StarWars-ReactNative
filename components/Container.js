import React from 'react';
import { StyleSheet, View } from 'react-native';

/* we will use this component as a wrapper for our views. 
    It will be strictly used for styling.*/
    
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: 'grey',
    
}
})

const Container = ({ children }) => ( 
<View style={styles.container}>
    {children} 
</View>
)

export default Container;