import React from "react";
import { View, Text, FlatList, StyleSheet,TouchableHighlight, ActivityIndicator, AsyncStorage } from "react-native";
import { Image, Card, CardAction, CardImage, CardTitle, CardButton, List, ListItem } from 'react-native-elements';
import { size } from 'lodash';
import imagen from '../images/1.png';
import { TouchableOpacity } from "react-native-gesture-handler";

class Characters extends React.Component {
        constructor(props) {

        super(props);

        this.state = {
        loading: false,
        data: [],
        page: 1,
        seed: 1,
        error: null,
        refreshing: false,
        foto: imagen,
        };
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        
        fetch(`https://swapi.dev/api/people/?format=json`, {
        method: 'GET',
        //Request Type
        })
        .then((res) => res.json())
        //If response is in json then in success
        .then((resjson) => {
        //Success
        this.setState({
            data: resjson.results,
            error: resjson.error || null,
            loading: false,
            refreshing: false
            });
        })
        //If response is not in json then in error
        .catch((error) => {
        //Error
        this.setState({ error, loading: false });
        });
    }
    

    render() {
    return (
        <View style={styles.container}>
            <Text style={styles.item}>Star Wars</Text>                
            {size(this.state.data) > 0 ? (
            <FlatList
            data={this.state.data}
            renderItem={({ item, index }) => (
                // pass props to next screen
                // !!! we want to pass , {data character} on press
                // I tried with function saveData, {data:data}
                <TouchableOpacity onPress={() => this.props.navigation.navigate('info')}>       
                    {/* !!! create new style cards  */}
                    <View > 
                        {/* show this data characters */}
                        <Text style={styles.text}>{index+1}. {item.name}</Text> 
                        {/* here the image/avatar with the same index name */}
                        <Image style={styles.image}
                        source= {require(`../images/1.png`)} // wrong 
                        />
                    </View>
                </TouchableOpacity>
                
                
                
            )}
            keyExtractor={(item, index) => index.toString()}
        />
        
        
        ):(
            <View>
                <ActivityIndicator size='large' />
                <Text>Loading List</Text>
            </View>
        )}
        </View>
        
    );
    }
}
// I tried to send the data with a function and recover it with another, but I couldn't

    // to save data character
    // saveData(data) {
    //     let objData = data;
    //     AsyncStorage.setItem('character', objData);
    // }

    // // to show data character 
    // displayData = async () =>{
    //     try{
    //         let character = await AsyncStorage.getItem('character');
    //         alert(character);
    //     }
    //     catch(error){
    //         alert(error);
    //     }}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 11,
        backgroundColor: 'grey',
        borderRadius:1.5
        
    },
    
    text:{
        fontSize: 18,
        color: 'black',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'right',
        padding:15,
        marginRight:20
        
        //fontWeight: 'bold' 
    },
    item: {
        padding: 10,
        fontSize: 25,
        textAlign:'center',
        color: '#ffe81f',
        borderColor: 'rgba(255,232,31, .2)',
        borderBottomWidth: 5,
        backgroundColor: 'black',
    },
    image: {
        width:150,
        height:150,

    },
    
});

export default Characters;

