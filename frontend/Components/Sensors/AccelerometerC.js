import React from 'react';
import { StyleSheet, Text, Button, TouchableOpacity, View, ListView, FlatList } from 'react-native';
import { Accelerometer } from 'expo';


export default class AccelerometerSensor{
constructor()
{
    this.accelerometerData = {};
    this._toggle();

}

get_data()
{
  return this.accelerometerData;
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
    Accelerometer.setUpdateInterval(1000);
  }

  _fast = () => {
    Accelerometer.setUpdateInterval(1000);
  }

 _subscribe = () => {
    this._subscription = Accelerometer.addListener(accelerometerData => {
      //this.state.accelerometerData.push(accelerometerData);
      this.accelerometerData= accelerometerData;

    });
  }

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  }
/*      <Text>
              {setInterval( () => {
              this._onPost();
            console.log("poutsa");
              }, 1000)}
        </Text>
*/

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
