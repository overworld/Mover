import React from 'react';
import * as Expo from "expo";
import {StyleSheet, View, Image, TextInput, FlatList} from 'react-native';

import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Thumbnail,
    Body,
    Text,
    Button,
    Icon,
    Left,
    Right
} from 'native-base';

export const get = () => fetch('http://mover.florianthe.fr/api/event/getall')
    .then((response) => response.json())
    .then((responseJson) => {
        return responseJson;
    })
    .catch((error) => {
        console.error(error);
    });


class NavigateScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'events': [],

            loading: true,

        };


    }

    getEvents() {
        return fetch('http://mover.florianthe.fr/api/event/getall')
            .then((response) => response.json())
            .then((response) => this.setState({'events': response}))
            .catch((error) => {
                console.error(error);
            });
    }


    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("../node_modules/native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("../node_modules/native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("../node_modules/@expo/vector-icons/src/vendor/react-native-vector-icons/Fonts/Ionicons.ttf"),
        });
        this.getEvents();
        this.setState({loading: false});
    }


    render() {

        const loading = <Expo.AppLoading/>;


        const showView = <Container>
            <Header/>
            <Content>


                                {this.state.events.map(function (event, index,) {
                                    return (
                                        <Card>

                                        <CardItem>
                                            <Left>
                                                <Thumbnail
                                                    source={require("../assets/logo.png")}/>
                                                <Body>
                                                    <Text>{event.name}</Text>
                                                    <Text note> {event.introduction} </Text>
                                                </Body>
                                            </Left>
                                        </CardItem>

                                            <CardItem>
                                                <Left>
                                                    <Button transparent>
                                                        <Icon active name="thumbs-up"/>
                                                        <Text>12 Likes</Text>
                                                    </Button>
                                                </Left>
                                                <Body>
                                                    <Button transparent>
                                                        <Icon active name="chatbubbles"/>
                                                        <Text>4 Comments</Text>
                                                    </Button>
                                                </Body>
                                                <Right>
                                                    <Text>{event.dateBegin}</Text>
                                                </Right>
                                            </CardItem>


                                        </Card>
                                    )
                                })}

            </Content>
        </Container>;

        return (
            <View style={styles.MainContainer}>
                {this.state.loading === false ? showView : loading}

            </View>
        )
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
    },
});

export default NavigateScreen