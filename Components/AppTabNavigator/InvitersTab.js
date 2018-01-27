import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Icon } from 'native-base';


export default class InvitersTab extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => ( 
      <Icon name="ios-glasses" style  = {{ color: tintColor}} />
    )
  }

  render() {
    return (
      <Container>
       
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'http://www.inkbrothers.com.au/uploads/3/0/2/3/3023284/people_orig.png' }} />
              </Left>
              <Body>
                <Text>Kyriakos Michael</Text>
                <Text note>Kyriakos Accepted Refferal.</Text>
              </Body>
              <Right>
                <Text >Completed</Text>
              </Right>
            </ListItem>

            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'https://xvp.akamaized.net/assets/illustrations/happy-laptop-user-girl-42b34bb78c8eb5e9a3d23eae1dd0d097.png' }} />
              </Left>
              <Body>
                <Text>Jenifer Lopez</Text>
                <Text note>Jenifer Declined Refferal.</Text>
              </Body>
              <Right>
                <Text>Rejected</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF9F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
