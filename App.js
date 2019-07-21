import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './Components/Search'
import Login from './Components/Login'
import LandScreen from './Components/LandScreen'
import Navigation from './Navigation/Navigation'



export default class App extends React.Component {
  render() {
    return (
        <Navigation/>
        //<LandScreen/>
        //<Search/>
        //<Login/>
    );
  }
}
    

