import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './Components/Search'
import Login from './Components/Login'
import Navigation from './Navigation/Navigation'
import Profil from './Components/Profil'

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

var RouteConfigs;

var MaterialBottomTabNavigatorConfig;

createMaterialBottomTabNavigator (
    RouteConfigs = {
      Recherche: { screen: Search},
      Profil: { screen: Profil },
},
    MaterialBottomTabNavigatorConfig = {
      initialRouteName: 'Recherche',
      activeColor: '#f0edf6',
      inactiveColor: '#3e2465',
      barStyle: { backgroundColor: '#694fad' }}
);

export default class createMaterialBottomTabNavigator extends React.Component{


};
