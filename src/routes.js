import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Image } from 'react-native';

import Login from './pages/Login';
import Demand from './pages/Demand';
import Profile from './pages/Profile';
import Supply from './pages/Supply';

import saveMoney from './assets/icons/save-money.png';
import sprout from './assets/icons/sprout.png';
import user from './assets/icons/user.png';

const App = createBottomTabNavigator(
  {
    Demand: {
      screen: Demand,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Image source={saveMoney} style={{ width: 25, height: 25 }} />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Image source={user} style={{ width: 20, height: 20 }} />
        ),
      },
    },
    Supply: {
      screen: Supply,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <Image source={sprout} style={{ width: 25, height: 25 }} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Demand',
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#fff',
      inactiveTintColor: '#000',
      // tabStyle: {
      //   paddingBottom: 5,
      //   paddingTop: 5,
      // },
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
