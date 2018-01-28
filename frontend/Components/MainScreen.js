import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { Icon} from 'native-base';
import { TabNavigator, StackNavigator } from 'react-navigation';

import OverviewTab from './AppTabNavigator/OverviewTab';
import PlansTab from './AppTabNavigator/PlansTab';
import InvitersTab from './AppTabNavigator/InvitersTab';
import EarningsTab from './AppTabNavigator/EarningsTab';
import CheckoutTab from './AppTabNavigator/CheckoutTab';


import { Font } from 'expo';


export default class MainScreen extends React.Component {
   // Load Custom Fonts 

    componentDidMount() {
        Font.loadAsync({
          'Montserrat-Regular': require('../Fonts//Montserrat-Regular.ttf'),
        });
      }

      // Set Header Navigation icons and Logo image.
    static navigationOptions = {
        title: "e-Insurance",
        //The Below Line is showing the Logo instead of the Text. 
       //  headerTitle:  <Image source={require('../logo.png')} style={{ width: 120, height: 43 }}/>,
       //  headerRight: <Icon name="ios-speedometer-outline" style={{ paddingRight: 10 }} />
    }
    // Render Method
  render() {
    return (
    <AppTabNavigator />
    );
  }
}

// Tab Navigation 
const AppTabNavigator = TabNavigator ({
    OverviewTab: {
        screen: OverviewTab
    },
    PlansTab: {
        screen: PlansTab
    },
    InvitersTab: {
        screen: InvitersTab
    },
    EarningsTab: {
        screen: EarningsTab
    }
}, {
// Tab Navigation Settings 
animationEnabled: true,
swipeEnabled: true,
tabBarPosition: "bottom",
tabBarOptions: {
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    showLabel: false,
    showIcon: true
}
}
)
// Style Sheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Montserrat-Regular',
  },
});
