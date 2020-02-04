import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Image } from 'react-native';

import Login from './pages/Login';
import Demand from './pages/Demand';
import Profile from './pages/Profile';
import Supply from './pages/Supply';

import saveMoney from './assets/icons/save-money.png';
import saveMoneyGreen from './assets/icons/money-green.png';
import sprout from './assets/icons/sprout.png';
import sproutGreen from './assets/icons/sprout-green.png';

import farmer from './assets/icons/farmer.png';
import farmerGreen from './assets/icons/farmer-green.png';

const App = createBottomTabNavigator(
  {
    Demand: {
      screen: Demand,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Image
            source={focused ? saveMoneyGreen : saveMoney}
            style={{ width: 35, height: 35 }}
          />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Image
            source={focused ? farmerGreen : farmer}
            style={{ width: 25, height: 25 }}
          />
        ),
      },
    },
    Supply: {
      screen: Supply,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Image
            source={focused ? sproutGreen : sprout}
            style={{ width: 33, height: 33 }}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'Demand',
    tabBarOptions: {
      showLabel: false,

      tabStyle: {
        paddingBottom: 5,
        paddingTop: 5,
      },
      style: {
        backgroundColor: '#fff',
        borderTopWidth: 1,
      },
    },
  }
);

const Root = createSwitchNavigator(
  {
    Login,
    // Register,
    App,
  },
  { initialRouteName: 'Login' }
);

const Routes = createAppContainer(Root);

export default Routes;
