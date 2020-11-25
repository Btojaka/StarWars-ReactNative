import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet,TouchableHighlight } from "react-native";
import { Card, CardAction, CardImage, CardTitle, CardButton, List, ListItem } from 'react-native-elements';
class Characters extends Component {
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
        const url = `https://swapi.dev/api/people/?format=json`;
       // const url2 = `http://swapi.dev/api/people/?page=2&&format=json`;
        //`https://swapi.dev/api/people/?id=${id}`

        const getDataUsingGet = () => {
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
        };


        fetch(url)
        .then(res => res.json())
        .then(res => {
            this.setState({
            data: res.results,
            error: res.error || null,
            loading: false,
            refreshing: false
            });
        })
        .catch(error => {
            this.setState({ error, loading: false });
        });

        // this.setState({ loading: true });
        // fetch(url2)
        // .then(res => res.json())
        // .then(res => {
        //     this.setState({
        //     data: res.results,
        //     error: res.error || null,
        //     loading: false,
        //     refreshing: false
        //     });
        // })


    };

    render() {
    return (
        <View style={styles.container}>
        <FlatList
            data={this.state.data}
            renderItem={({ item, index }) => (
                <TouchableHighlight onPress={() => this.props.navigation.navigate('InfocharScreen', {data: data} )}>        
                    <Card>
                        <Text>ID: {index} , Name:{item.name}</Text>
                    </Card>
                        
                </TouchableHighlight>
        )}
        />
        </View>
    );
    }
    
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        paddingTop: 22
         
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

export default Characters;

{/* <ListItem
                roundAvatar
                title={`${item.name}`}
                subtitle={item.genders}
                //avatar={{ uri: item.picture.thumbnail }}
            /> */}
{/* <Card styleComponent={{}}
        onCardClick={() => {const { navigate } = this.props.navigation; navigate('Detail', { data: item  });}}
        onClickBottomButton ={() => {}}
        onShare ={() =>{}}
        item={item}
        userIdD={""}>
    
  </Card> */}