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


class NavigateScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("../node_modules/native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("../node_modules/native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("../node_modules/@expo/vector-icons/src/vendor/react-native-vector-icons/Fonts/Ionicons.ttf"),
        });
        this.setState({ loading: false });
    }


    render() {

        const loading = <Expo.AppLoading />;

        const showView = <Container>
            <Header/>
            <Content>
                <Card>
                    <CardItem>
                        <Left>
                            <Thumbnail
                                source={require("../assets/logo.png")}/>
                            <Body>
                            <Text>NativeBase</Text>
                            <Text note>GeekyAnts</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image
                            source={require("../assets/BsoN209EVK0EiHQDCs2Cfg.XmvlPQeNpSlK5rZlvkEPbg.adc620.jpg")}
                            style={{height: 200, width: null, flex: 1}}/>
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
                            <Text>11h ago</Text>
                        </Right>
                    </CardItem>

                    <CardItem>
                        <Left>
                            <Thumbnail
                                source={require("../assets/logo.png")}/>
                            <Body>
                            <Text>NativeBase</Text>
                            <Text note>GeekyAnts</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image
                            source={require("../assets/BsoN209EVK0EiHQDCs2Cfg.XmvlPQeNpSlK5rZlvkEPbg.adc620.jpg")}
                            style={{height: 200, width: null, flex: 1}}/>
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
                            <Text>11h ago</Text>
                        </Right>
                    </CardItem>

                    <CardItem>
                        <Left>
                            <Thumbnail
                                source={require("../assets/logo.png")}/>
                            <Body>
                            <Text>NativeBase</Text>
                            <Text note>GeekyAnts</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image
                            source={require("../assets/BsoN209EVK0EiHQDCs2Cfg.XmvlPQeNpSlK5rZlvkEPbg.adc620.jpg")}
                            style={{height: 200, width: null, flex: 1}}/>
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
                            <Text>11h ago</Text>
                        </Right>
                    </CardItem>


                    <CardItem>
                        <Left>
                            <Thumbnail
                                source={require("../assets/logo.png")}/>
                            <Body>
                            <Text>NativeBase</Text>
                            <Text note>GeekyAnts</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image
                            source={require("../assets/BsoN209EVK0EiHQDCs2Cfg.XmvlPQeNpSlK5rZlvkEPbg.adc620.jpg")}
                            style={{height: 200, width: null, flex: 1}}/>
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
                            <Text>11h ago</Text>
                        </Right>
                    </CardItem>


                    <CardItem>
                        <Left>
                            <Thumbnail
                                source={require("../assets/logo.png")}/>
                            <Body>
                            <Text>NativeBase</Text>
                            <Text note>GeekyAnts</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image
                            source={require("../assets/BsoN209EVK0EiHQDCs2Cfg.XmvlPQeNpSlK5rZlvkEPbg.adc620.jpg")}
                            style={{height: 200, width: null, flex: 1}}/>
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
                            <Text>11h ago</Text>
                        </Right>
                    </CardItem>


                    <CardItem>
                        <Left>
                            <Thumbnail
                                source={require("../assets/logo.png")}/>
                            <Body>
                            <Text>NativeBase</Text>
                            <Text note>GeekyAnts</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image
                            source={require("../assets/BsoN209EVK0EiHQDCs2Cfg.XmvlPQeNpSlK5rZlvkEPbg.adc620.jpg")}
                            style={{height: 200, width: null, flex: 1}}/>
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
                            <Text>11h ago</Text>
                        </Right>
                    </CardItem>


                    <CardItem>
                        <Left>
                            <Thumbnail
                                source={require("../assets/logo.png")}/>
                            <Body>
                            <Text>NativeBase</Text>
                            <Text note>GeekyAnts</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image
                            source={require("../assets/BsoN209EVK0EiHQDCs2Cfg.XmvlPQeNpSlK5rZlvkEPbg.adc620.jpg")}
                            style={{height: 200, width: null, flex: 1}}/>
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
                            <Text>11h ago</Text>
                        </Right>
                    </CardItem>


                    <CardItem>
                        <Left>
                            <Thumbnail
                                source={require("../assets/logo.png")}/>
                            <Body>
                            <Text>NativeBase</Text>
                            <Text note>GeekyAnts</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem cardBody>
                        <Image
                            source={require("../assets/BsoN209EVK0EiHQDCs2Cfg.XmvlPQeNpSlK5rZlvkEPbg.adc620.jpg")}
                            style={{height: 200, width: null, flex: 1}}/>
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
                            <Text>11h ago</Text>
                        </Right>
                    </CardItem>
                </Card>
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