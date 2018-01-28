import React from 'react';
import {Gyroscope,} from 'expo';
import {
        StyleSheet,
        Text,
        TouchableOpacity,
        Button,
        View
} from 'react-native';

export default class GyroscopeSensor{
  constructor()
  {
    this.gyroscopeData= {};
    this._toggle();
  }

  get_data()
  {
    return  this.gyroscopeData

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
    Gyroscope.setUpdateInterval(1000);
  }

  _fast = () => {
    Gyroscope.setUpdateInterval(1000);
  }

  _subscribe = () => {
    this._subscription = Gyroscope.addListener((result) => {
      this.gyroscopeData = result;
    });
  }

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
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
