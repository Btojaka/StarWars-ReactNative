import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Container from './Container';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import C3PO from '../images/c3po.png';
import Chewbacca from '../images/chewbacca.png';
import Darthvader from '../images/darkvader.png';
import Leia from '../images/leia.png';
import Luke from '../images/luke.png';
import Oviwankenobi from '../images/obiwankenobi.png';
import R2d2 from '../images/r2d2.png';
import Yoda from '../images/yoda.png';

//addMenuItem()

const styles = StyleSheet.create({
    item: {
        padding: 20,
        justifyContent: 'center',
        borderColor: 'rgba(255,232,31, .2)',
        borderBottomWidth: 1
    },
    text: {
        color: '#ffe81f',
        fontSize: 20
    }
});

export default function Characters({ data }){

    return (
        
        
            <Container>
                <View>
                    <Text>Star WarsCharacters</Text>
                </View>
                <Grid>
                    {data.map((characters, i) => {
                        return(
                                <Row key={i}>
                                    <Card>
                                        <CardAction 
                                            separator={true} 
                                            inColumn={false}>
                                            <CardTitle
                                                title={characters.name}
                                            />
                                            <CardImage 
                                                source={Chewbacca} 
                                            />
                                            <CardButton
                                                onPress={() => {

                                                }}
                                                title="Info"
                                                color="#FEB557"
                                            />
                                        </CardAction>
                                    </Card>
                                </Row>
                        )
                    })}
                </Grid>
            </Container>
                
    )
}

// RENDER() ??
{/* <CardImage 
      source={{uri: 'http://bit.ly/2GfzooV'}} 
      title="Top 10 South African beaches"
    />
    <CardTitle
      subtitle="Number 6"
    />
    <CardContent text="Clifton, Western Cape" />
    <CardAction 
      separator={true} 
      inColumn={false}>
      <CardButton
        onPress={() => {}}
        title="Share"
        color="#FEB557"
      />
      <CardButton
        onPress={() => {}}
        title="Explore"
        color="#FEB557"
      />
    </CardAction> */}