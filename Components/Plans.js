import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, CardItem, Thumbnail, 
         Body, Left, Right, Button, Icon} from 'native-base';

import apiGET from './AppTabNavigator/Services/apiGET';  

export default class Plans extends React.Component {
    constructor () {
        super();
        this.state = {
          plans: [],
          userPlan: " "
        }
    }
    componentDidMount () {
        apiGET.getRovers().then((res) => {
          this.setState ({
            plans : res.plans
          })
        })
        }  
    render() {
        let plans = [];
        this.state.plans.forEach(function (plan) {
            if (plan.type === "Health") {
                plans.push(
                    <CardItem style = {{padding: 10}}>
                            <Left>
                                <Thumbnail source = {require ('../assets/house.png')} />
                                <Body>
                                    <Text>Health</Text>
                                    <Text>You are having a House Plan with Insurance.</Text>
                                </Body>
                            </Left>
                    </CardItem>
              )
            }
            else if (plan.type === "Motor") {
                plans.push(
            
                    <CardItem style = {{padding: 10}}>
                            <Left>
                                <Thumbnail source = {require ('../assets/life.png')} />
                                <Body>
                                    <Text>Motor</Text>
                                    <Text>You are having a House Plan with Insurance.</Text>
                                </Body>
                            </Left>
                    </CardItem>
              )
            }
            else if (plan.type === "Property") {
                plans.push(
            
                    <CardItem style = {{padding: 10}}>
                            <Left>
                                <Thumbnail source = {require ('../assets/images.png')} />
                                <Body>
                                    <Text>Property</Text>
                                    <Text>You are having a House Plan with Insurance.</Text>
                                </Body>
                            </Left>
                    </CardItem>
              )
            }
            else (
                <Text>No Plants Available</Text>
            )
    });
    return (
      <View>
        <Card>
        { plans }
        </Card>
      </View>
      )
    };
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FAFAFA',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });