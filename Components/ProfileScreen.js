import React from 'react';
import {StyleSheet, Text, View, Button, TextInput, FlatList} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Navigator from "./Navigator";
import Events from "../Helpers/EventData";
import EventItem from "./EventItem";
import * as Expo from "expo";

class ProfileScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    async componentWillMount() {
        console.log(this.props);
    }

    render() {
        return (
            <View style={styles.MainContainer}>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
    },
});

export default ProfileScreen