import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import NavigateScreen from "./NavigateScreen";
import SearchScreen from "./SearchScreen";
import ProfileScreen from "./ProfileScreen";
import React from 'react'
import Events from '../Helpers/EventData'
import {StyleSheet, View, TextInput, FlatList} from 'react-native'
import {Container, Header, Content, Button, Icon, Text} from 'native-base';
import EventItem from "./EventItem";

class Navigator extends React.Component {
    render() {
        return (
            <View>
            </View>
        )
    }

}

const TabNavigator = createMaterialBottomTabNavigator(
    {
        SearchScreen: {
            screen: SearchScreen,
            navigationOptions: {
                activeColor: '#ff6900',
                inactiveColor: '#fff',
                title: '',
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name={'md-search'}/>
                    </View>),
            }
        },

        NavigateScreen: {
            screen: NavigateScreen,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name="md-compass"/>
                    </View>),
                activeColor: '#ff6900',
                inactiveColor: '#fff',
                title: '',
            }
        },
        ProfileScreen: {
            screen: ProfileScreen,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (
                    <View>
                        <Icon style={[{color: tintColor}]} size={25} name="md-person"/>
                    </View>),
                activeColor: '#ff6900',
                inactiveColor: '#fff',
                title: '',
            }
        },
    },
    {
        initialRouteName: "NavigateScreen",
        barStyle: {backgroundColor: '#261c32'},
    },
);


export default createAppContainer(TabNavigator);



