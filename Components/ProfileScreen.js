import React from 'react';
import {StyleSheet, Text, View,  TextInput, FlatList, Image} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Navigator from "./Navigator";
import Events from "../Helpers/EventData";
import EventItem from "./EventItem";
import * as Expo from "expo";
import {LinearGradient} from "expo-linear-gradient";
import {Content, Form, Button} from "native-base";

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
                <View style={styles.bodyStyle}>
                    <Image style={styles.imgprofil} source={require("../assets/major.jpg")}/>
                    <Text style={styles.name}> Thierry BUCHER</Text>
                    <Text style={styles.loca}> Localisation actuelle: Annecy</Text>

                    <Button
                        style={{
                            width: '80%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 40,
                            marginLeft: '10%',
                            marginTop: '10%',
                            backgroundColor: 'transparent'
                        }}>
                        <LinearGradient start={[0, 0.5]}
                                        end={[1, 0.5]}
                                        colors={['#ff5f24', '#fba239']}
                                        style={{
                                            width: '100%',
                                            height: 50,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: 40,
                                        }}>
                            <View>
                                <Text
                                    style={{
                                        paddingBottom: 8,
                                    }}>  Modifier mes informations</Text>
                            </View>
                        </LinearGradient>

                    </Button>

                    <Button
                        style={{
                            width: '80%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 40,
                            marginLeft: '10%',
                            marginTop: '15%',
                            backgroundColor: 'transparent'
                        }}>
                        <LinearGradient start={[0, 0.5]}
                                        end={[1, 0.5]}
                                        colors={['#ff5f24', '#fba239']}
                                        style={{
                                            width: '100%',
                                            height: 50,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: 40,
                                        }}>
                            <View>
                                <Text
                                    style={{
                                        paddingBottom: 8,
                                    }}>Passer coté Organisateur </Text>
                            </View>
                        </LinearGradient>

                    </Button>
                    <Button
                        style={{
                            width: '80%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 40,
                            marginLeft: '10%',
                            marginTop: '15%',
                            backgroundColor: 'transparent'
                        }}>
                        <LinearGradient start={[0, 0.5]}
                                        end={[1, 0.5]}
                                        colors={['#ff5f24', '#fba239']}
                                        style={{
                                            width: '100%',
                                            height: 50,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: 40,
                                        }}>
                            <View>
                                <Text
                                    style={{
                                        paddingBottom: 8,
                                    }}> Supprimer mon compte</Text>
                            </View>
                        </LinearGradient>

                    </Button>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor: "#170F25",
    },

    btn: {
        width: '50%',
        textAlign: 'right',
        borderRadius: 40,
        marginLeft: '45%',
        marginTop: '25%',
        backgroundColor: '#FF5A22'
    },
    bodyStyle: {
        marginTop: 30,
        marginLeft: 24,
        marginRight: 24,
        marginBottom: 70,
    },

    rowbtn:{
        flex: 1,
        flexDirection: 'row',
    },

    name: {
        color: "#FF5A22",
        marginTop: 12,
        textAlign: 'center',
        fontSize: 22,
    },

    loca: {
        color: "#FBAB3C",
        marginTop: 24,
        textAlign: 'center',
        fontSize: 18,
    },

    imgprofil: {
        marginLeft: 100,
        marginTop: 50,
        height: 120,
        width: 120,
    },
});

export default ProfileScreen

