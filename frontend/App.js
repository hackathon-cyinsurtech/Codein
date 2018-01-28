import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator} from 'react-navigation';
import MainScreen from './Components/MainScreen';

import { Font } from 'expo';

export default class App extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      'Montserrat-Regular': require('./Fonts/Montserrat-Regular.ttf'),
    });
  }
  render() {
    return (
     <AppStackNavigator />
    );
  }
}

const AppStackNavigator =  StackNavigator({

  Main: {
    screen: MainScreen
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Montserrat-Regular',
  },
});
