import { Ionicons } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';

import 'react-native-gesture-handler';

import { AppLoading } from 'expo';

import * as Font from 'expo-font';

import React,{Component} from 'react';

import Stacks from './src/navigation/stacks';



export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isReady: false,
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Roboto_Black: require('native-base/Fonts/Roboto-Black.ttf'),
      AntDesign: require('native-base/Fonts/AntDesign.ttf'),
      rale_bold:require('native-base/Fonts/Raleway-Bold.ttf'),
      rale_regular:require('native-base/Fonts/Raleway-Regular.ttf'),
      rale_light:require('native-base/Fonts/Raleway-Light.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }
  render(){
    if (!this.state.isReady) {
      return <AppLoading />;
    }
  return (
   <NavigationContainer>
   <Stacks/>
   </NavigationContainer>
  );
}
}


