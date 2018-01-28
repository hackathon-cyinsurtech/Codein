import React from 'react';
import { Magnetometer, } from 'expo';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from 'react-native';

export default class MagnetometerSensor {
  constructor()
  {
    this.MagnetometerData = {};
    this._toggle();
  }

  get_data(){
    return this.MagnetometerData;
  }

  _toggle = () => {
    if (this._subscription) {
      this._unsubscribe();
    } else {
      this._subscribe();
      this._slow();
    }
  }

  _slow = () => {
    Magnetometer.setUpdateInterval(1000);
  }

  _fast = () => {
    Magnetometer.setUpdateInterval(1000);
  }

  _subscribe = () => {
    this._subscription = Magnetometer.addListener((result) => {
      //this.setState({MagnetometerData: result});
      this.MagnetometerData = result;
    });
  }

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  }

  _onPost= () => {
    //var data = {test: ''};
    let { x, y, z } = this.MagnetometerData;


        fetch('http://frameplace.xyz:5000/echo', {
           method: 'POST',
           headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
    body: JSON.stringify(this.MagnetometerData)
        }).then(res => res.json())
        .then(this.MagnetometerData = [])
.then(res => alert('Success:' + res))
.catch(error => alert('Error:' + error));

  }
}

function round(n) {
  if (!n) {
    return 0;
  }

  return Math.floor(n * 100) / 100;
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  sensor: {
    marginTop: 15,
    paddingHorizontal: 10,
  },
});
