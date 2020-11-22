import React, {Component} from "react";
import { StyleSheet, View, Button, Alert, Text, ScrollView, ImageBackground } from "react-native";
import axios from "axios";

export default class Characters extends Component {
    state = {
        characters: null,
        background: Coruscant
    };

    static navigationOptions = {
        tabBarLabel: "All Characters"
    };

    componentDidMount = () => {
    axios.get("https://swapi.co/api/people/").then(res =>
        this.setState({
        characters: res.data.results
        })
    );
    }

    render = () => {

        return (
            <Container>
                <ImageBackground source={this.state.background} style={{width: '100%', height: '100%'}}>
                    <View style={styles.container}>
                        <ScrollView style={styles.scroll}>
                            <Text style={[styles.textCenter, styles.text]}>Star-Wars characters</Text>
                            <Text> </Text>

                            {this.state.characters !== null ? (
                            this.state.characters.map((chara, key) => (
                                <View style={styles.characterSheet} key={key}>
                                <Text style={styles.text}>Name : {chara.name}</Text>
                                <Text style={styles.text}>Gender : {(chara.gender === 'n/a') ? 'Droid' : chara.gender}</Text>
                                </View>
                            ))
                            ) : (
                            <Text style={[styles.textCenter, styles.text]}>Loading…</Text>
                            )}
                        </ScrollView>
                    </View>
                </ImageBackground>
            </Container>
        );
    }
}
