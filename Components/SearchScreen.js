import React from 'react'
import {StyleSheet, View, Image, Text, TextInput, FlatList} from 'react-native'
import Navigator from "./Navigator";
import Events from "../Helpers/EventData";
import EventItem from "./EventItem";
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {Container, Header, Item, Input, Icon, Button, Content, Card, CardItem, Body } from "native-base";

class SearchScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    _onPressButton() {
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <View style={styles.main_container}>
                <Container >
                    <Header style={styles.searchbar} searchBar rounded>
                        <Item>
                            <Icon name="ios-search" />
                            <Input placeholder="Rechercher" />
                        </Item>
                        <Button transparent>
                            <Text>Rechercher</Text>
                        </Button>
                    </Header>
                    <Text style={styles.little}>Dernières recherches</Text>
                    <Text style={styles.medium}>Concert</Text>
                    <Text style={styles.medium}>bar à vin</Text>
                    <Text style={styles.medium}>compétition</Text>



                </Container>
                <View style={styles.row}>
                <Content >
                    <Card >
                        <CardItem style={styles.carte}>
                            <Body >
                                <Text style={{color: "white"}}>
                                    Bar
                                </Text>
                                <Text style={{color: "grey", fontSize:11}}>
                                    112
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card >
                        <CardItem style={styles.carte}>
                            <Body >
                                <Text style={{color: "white"}}>
                                    Boites de nuit
                                </Text>
                                <Text style={{color: "grey", fontSize:11}}>
                                    70
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card >
                        <CardItem style={styles.carte}>
                            <Body >
                                <Text style={{color: "white"}}>
                                    Concert
                                </Text>
                                <Text style={{color: "grey", fontSize:11}}>
                                    29
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card >
                        <CardItem style={styles.carte}>
                            <Body >
                                <Text style={{color: "white"}}>
                                    Sport
                                </Text>
                                <Text style={{color: "grey", fontSize:11}}>
                                    52
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    main_container: {
        marginTop:'6%',
        flex: 1,
        height: 190,

    },

    carte:{
      backgroundColor: "#170F25",
    },

    textcarte:{
        color:"white",
    },

    row:{
        flexDirection: 'row',

    },

    little: {
        marginLeft: 10,
        fontSize: 12,
        marginBottom: 6,
    },
    medium: {
        marginLeft: 8,
        fontSize: 14,
    },
    searchbar:{
      backgroundColor:"#170F25",
    },

    date_container: {
        flex: 1
    },
    header_container: {
        flex: 3,
        flexDirection: 'row'
    },
    description_container: {
        flex: 7
    },
});

export default SearchScreen