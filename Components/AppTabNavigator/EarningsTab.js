import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Segment, Content, Form, Item, Input } from 'native-base';

import { SocialIcon } from 'react-native-elements';
import Login from '../Login';

export default class EarningsTab extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => ( 
      <Icon name="ios-contact-outline" style  = {{ color: tintColor}} />
    )
  }
  render() {
    return (
        <Login />
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
