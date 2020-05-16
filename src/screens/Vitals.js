import React, { Component } from 'react';

import {View,StyleSheet,ScrollView,ImageBackground} from 'react-native';

import {Button,Container,Header,Card,CardItem,Left,Text,Content, Right,Body} from 'native-base';





export default class VitalsScreen extends Component{
    render(){
        return(
            <Container>
            <View style={{height:50,marginLeft:20}}>
            <Text style={{fontFamily:'Roboto_medium',fontSize:30}}>Vitals</Text>
            </View>
            </Container>
        )
    }
}
