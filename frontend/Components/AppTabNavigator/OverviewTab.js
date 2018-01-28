import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Body, Label,  Item,  Icon, Button, Container, Header, Content, Card, CardItem, Right, ActionSheet} from 'native-base';
import apiGET from './Services/apiGET';
import apiGETRefferals from './Services/apiGETRefferals';  

import { Accelerometer } from 'expo';
import AccelerometerSensor from '../Sensors/AccelerometerC';
import GyroscopeSensor from '../Sensors/GyroscopeC';
import MagnetometerSensor from '../Sensors/MagnetometerC';

var BUTTONS = [
  { text: "Option 0", icon: "american-football", iconColor: "#2c8ef4" },
  { text: "Option 1", icon: "analytics", iconColor: "#f42ced" },
  { text: "Option 2", icon: "aperture", iconColor: "#ea943b" },
  { text: "Delete", icon: "trash", iconColor: "#fa213b" },
  { text: "Cancel", icon: "close", iconColor: "#25de5b" }
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
import ChartC from '../Chart';
import api from './api';

export default class OverviewTab extends React.Component {
  constructor () {
    super();
    this.state = {
      name: " ",
      Points: " ",
      Email: "",
      Plan: "",
      Refferals: "",
      MLResult: ""
     
    },
    Magnet = new MagnetometerSensor;
    Accel = new AccelerometerSensor;
    Gyros = new GyroscopeSensor;
    interval = {};
  }

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => ( 
      <Icon name="ios-paper" style  = {{ color: tintColor}} />
    )
  }

  // Add this to Main App.js
  _onPost= () => {

    //JSON.stringify("accelerometer:"+ JSON.stringify(Magnet.get_data()) + "," +
    //                     "magnitometer:" +JSON.stringify(Accel.get_data()) + "," +
    //                     "gyroscope:"+ JSON.stringify(Gyros.get_data()) + "}")

    var jsonObject = {'accelerometer':Magnet.get_data(),
                      'magnitometer':Accel.get_data(),
                      'gyroscope': Gyros.get_data()}

    console.log(JSON.stringify(Magnet.get_data()) +
                                      JSON.stringify(Accel.get_data()) +
                                      JSON.stringify(Gyros.get_data()));

      fetch('http://frameplace.xyz:5000/get-score', {
           method: 'POST',
           headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(jsonObject)


  }).then(res => res.json())
.then(res => this.setState ({
  MLResult: res
}))
.catch(error => console.log('Error:' + error));

}

// --------------------------------

_start=()=> {

this.interval = setInterval( () =>{
  this._onPost();
  console.log("poutsa");
},5000)

}

_stop=()=> {

clearInterval(this.interval);

}

  // POST
  /*componentDidMount () {
    api.getRovers()
    .then((res) => {
      this.setState ({
       // name: api.res,
      
      })
    })
    };
    */

 // GET 
    componentDidMount () {
      apiGET.getRovers().then((res) => {
        this.setState ({
          Points : res.points,
          Email: res.email,
          name: res.name,
          Plan: res.plans
        })
      }, 
    )
      apiGETRefferals.getRovers().then((res) => {
        this.setState ({
          Refferals : res
        })
      },
    )
      }

    
    
// Render Method
  render() {
    return (
      <Container style = {styles.container}>
        <Content>
        <Body>
      <Text style = {{fontSize: 25, color: "black"}}> Dashboard Overview </Text>
      <Text  style = {{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>{this.state.name}</Text>

        </Body>
          <Card>
            <CardItem>
              <Icon active name="ios-basket" />
              <Text>Total Points</Text>
              <Right>
              <Text>{this.state.Points}</Text>
              </Right>
             </CardItem>
             <CardItem>
              <Icon  name="ios-cash-outline" />
              <Text>Current Balance</Text>
              <Right>
              <Text>$200</Text>
              </Right>
             </CardItem>
             <CardItem>
              <Icon  name="ios-bookmarks-outline" />
              <Text>Plans</Text>
              <Right>
              <Text>{this.state.Plan.length}</Text>
              </Right>
             </CardItem>
             <CardItem>
              <Icon  name="ios-people" />
              <Text >Refferals</Text>
              <Right>
              <Text >{this.state.Refferals.length} People</Text>
              </Right>
             </CardItem>
           </Card>
        </Content>
        <Content>
        <View style = {{ flex: 1,flexDirection: 'row',  justifyContent: 'center', alignItems: 'center'}}>
        <Button style = {{backgroundColor: 'transparent'}}   onPress={()=>this._start()} >
<Icon  name='ios-speedometer-outline' style={{fontSize: 80 ,color: "black"}}/>  
      <Text>Start</Text>
        </Button> 
        <Button style = {{backgroundColor: 'transparent'}}  onPress={()=>this._stop()}title ="Stop" >
<Icon  name='ios-speedometer-outline' style={{fontSize: 80, color: "black"}}/>  
      <Text> Stop </Text>
        </Button> 
        </View>
        <CardItem>
              <Icon active name="ios-basket" />
              <Text>Driving Profile:</Text>
              <Right>
              <Text>85%</Text>
              </Right>
       </CardItem>
        </Content>    
      </Container>
    );
   }
  }
  // Layout Styles 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  }
});
