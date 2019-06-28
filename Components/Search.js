import { createBottomTabNavigator, createAppContainer} from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import React from 'react'
import Events from '../Helpers/EventData'
import {StyleSheet, View, TextInput, Button, FlatList} from 'react-native'
import EventItem from "./EventItem";


export const IMAGENAME = require('../assets/logo.png');

class Search extends React.Component {


    getUsers() {
        return fetch('http://mover.florianthe.fr/api/user/getall')
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    getUser(id) {
        return fetch('http://mover.florianthe.fr/api/user/' + id)
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    createUser() {

        let data = {
            role: 'USER',
            name: 'testsetset',
            firstname: 'MyFirstname',
            sexe: 'male',
            city: 'annecy',
            email: 'mymail@est.fr',
            password: 'testPass',
            files: {
                uri: IMAGENAME,
                type: 'image/jpeg',
                name: 'logo.png',
            }
        };

        try {
            let response = fetch(
                "http://mover.florianthe.fr/api/user/create",
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: JSON.stringify(data)
                }
            );

            if (response.status >= 200 && response.status < 300) {
                console.warn("authenticated successfully!!!");
            }
        } catch (errors) {

            console.warn(errors);
        }
    }

    componentWillMount() {
        this.createUser();
    }


    render() {
        return (
            <View style={styles.MainContainer}>
                <TextInput style={styles.textinput} placeholder='Rechercher un évènement'/>
                <Button title='Rechercher' onPress={() => {
                }}/>
                <FlatList
                    data={Events}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <EventItem event={item}/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        marginTop: 30,

    },
    textinput: {
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
});