import React from "react";
import { View, Text, FlatList, StyleSheet,TouchableHighlight, ActivityIndicator } from "react-native";
import { Image, Card, CardAction, CardImage, CardTitle, CardButton, List, ListItem } from 'react-native-elements';
import { size } from 'lodash';

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
        };
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
       // const url = `https://swapi.dev/api/people/?format=json`;
       // const url2 = `http://swapi.dev/api/people/?page=2&&format=json`; // tests
        //`https://swapi.dev/api/people/?id=${id}` // tests

        //GET request
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
                // !!! we want to pass , {data: data} too on press
                <TouchableHighlight onPress={() => this.props.navigation.navigate('info')}>        
                    {/* !!! create new style cards  */}
                    <Card > 
                        {/* show this data characters */}
                        <Text style={styles.text}>{index+1}. {item.name}</Text> 
                        {/* here the image/avatar with the same index name */}
                    </Card>
                
                </TouchableHighlight>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        paddingBottom: 22,
        backgroundColor: 'grey',
        
    },
    
    text:{
        fontSize: 18,
        color: 'black',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign:'left',
        padding: 40
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

    }
});

export default Characters;

