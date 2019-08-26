import React from 'react'
import {
    Container,
    Header,
    Item,
    Input,
    Icon,
    Button,
    Text,
    CardItem,
    Left,
    Content,
    Body,
    H2,
    Right,
    Card
} from 'native-base';
import {StyleSheet, View, Image, TextInput, FlatList} from 'react-native';
import Navigator from "./Navigator";
import Events from "../Helpers/EventData";
import EventItem from "./EventItem";

class SearchScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    _onPressButton() {
        this.props.navigation.navigate('Home');
    }

    render() {

        const ShowEvents =  <Container>
            <Content searchBar rounded style={{
                marginTop: '10%', borderRadius: 20
            }}>
                <Item style={{
                    justifyContent: 'center',
                    alignItems: 'center', backgroundColor: '#170f25', color: '#ffffff'
                }}>
                    <Icon style={{color: '#ffffff'}} name="ios-search"/>
                    <Input style={{color: '#ffffff'}} placeholder="Search"/>
                    <Icon style={{color: '#ffffff'}} name="ios-people"/>
                </Item>
                <Content>
                    <CardItem style={{
                        backgroundColor: '#170f25',
                        borderRadius: 50,
                        height: 150,
                        width: '40%',
                        marginTop: 50
                    }}>
                        <Body>
                        <Text style={{color: '#ffffff'}}>Bars {'\n'}</Text>
                        <Text style={{color: 'gray'}}>26</Text>
                        </Body>
                    </CardItem>
                    <CardItem style={{
                        backgroundColor: '#170f25',
                        borderRadius: 50,
                        flex: 1,
                        height: 150,
                        width: '40%',
                        marginTop: 50
                    }}>
                        <Body>
                        <Text style={{color: '#ffffff'}}>Concerts {'\n'}</Text>
                        <Text style={{color: 'gray'}}>48</Text>
                        </Body>
                    </CardItem>
                    <CardItem style={{
                        backgroundColor: '#170f25',
                        borderRadius: 50,
                        height: 150,
                        width: '40%',
                        marginTop: 50
                    }}>
                        <Body>
                        <Text style={{color: '#ffffff'}}>Boites de nuit {'\n'}</Text>
                        <Text style={{color: 'gray'}}>1200</Text>
                        </Body>
                    </CardItem>
                </Content>
            </Content>
        </Container>;
        return (
            <View style={styles.main_container}>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: "row",

    },
    content_container: {
        flex: 1,
        margin: 5
    },
    image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'gray'
    },

    name_text: {
        fontWeight: 'bold',
        fontSize: 18,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    price: {
        fontWeight: 'bold',
        fontSize: 26,
        color: '#666666'
    },
    theme: {},
    date: {},
    description: {
        textAlign: 'left',
        fontSize: 12
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