import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, CardItem, Thumbnail, 
         Body, Left, Right, Button, Icon, Content, Container, Form, Item, Input,} from 'native-base';

import apiGETRefferals from './Services/apiGETRefferals';  

export default class InvitersTab extends React.Component {
    constructor () {
        super();
        this.state = {
          referrals:[],
          Points: [],
          Agent: []
    
        }
    }
    static navigationOptions = {
      tabBarIcon: ({tintColor}) => ( 
        <Icon name="ios-at-outline" style  = {{ color: tintColor}} />
      )
    }
    componentDidMount () {
        apiGETRefferals.getRovers().then((res) => {
          this.setState ({
            referrals : res,
            Points: res.value,
            Agent: res.agent
          })
        })
        }  
    render() {
        let userReferrals = [];
      
        this.state.referrals.forEach(function (referral) {
          userReferrals.push (
            <Card>
                 <CardItem style = {{padding: 10}}>
                            <Left>
                                <Thumbnail source = {require ('../../assets/man.png')} />
                                <Body>
                                    <Text>Name:   {referral.name}</Text>
                                    <Text> {referral.value} </Text>
                                    <Text>Agent:  {referral.agent}</Text>
                                </Body>
                                <Right>
                                {referral.value == 'NULL' ?  <Text>Pending</Text>  : <Text>Active</Text> }
                                  <Icon name= "ios-card" />
                                </Right>
                            </Left>
                    </CardItem>
             </Card> 
              )});
    return (
      <Content>
        <Card>
        { userReferrals }
        </Card>
        <Container>
       <Content>
         <Form>
           <Body>
           <Text style ={{fontWeight: 'bold'}} >New Referral</Text>
           </Body>
           <Item rounded last>
             <Input placeholder="Name" />
           </Item>
           <Item rounded last>
             <Input placeholder="Surname" />
           </Item>
           <Item rounded last>
             <Input placeholder="Email" />
           </Item>
           <Item rounded last>
             <Input placeholder="Mobile Phone" />
           </Item>
           <Button full info>
           <Text>Register</Text>
         </Button>
         </Form>
       </Content>
     </Container>
      </Content>
       
      )
    };
}




/*
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FAFAFA',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  */