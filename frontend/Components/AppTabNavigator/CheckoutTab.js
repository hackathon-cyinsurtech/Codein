import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

import {Body,  Icon, Button, Container, Header, Content, Card, CardItem, Right} from 'native-base';





export default class CheckoutTab extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => ( 
      <Icon name="ios-cart" style  = {{ color: tintColor}} />
    )
  }

  render() {
    return (
     <View>
          <Text> fewf </Text>
     </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECEFF1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
