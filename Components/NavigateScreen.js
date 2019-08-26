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
    H1,
    Body,
    Text,
    Button,
    Icon,
    Left,
    H2,
    Right
} from 'native-base';


class NavigateScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            clicked: false,
            event1: false,
            event2: false,
            event3: false,
            event4: false,
            event5: false,
            event6: false,
            event7: false,
            title: '',
            organizer: '',
            description: '',
            date: '',
            price: '',

        };
    }

    renderEvent(number) {
        if (number === 1) {
            this.setState({
                clicked: true,
                event1: true,
                title: 'Harry Color Run 2019 Edition',
                price: 'free',
                organizer: 'Le bowl',
                description: 'Je suis une desc. Je suis une desc. Je suis une desc. Je suis une desc. Je suis une desc. Je suis une desc.',
                date: '27 Aout 2019'
            });
        }
        if (number === 2) {
            this.setState({
                clicked: true,
                event2: true,
                title: 'Degustation de vins à l\'aveugle',
                price: 'free',
                organizer: 'Le bowl',
                description: 'Je suis une desc. Je suis une desc. Je suis une desc. Je suis une desc. Je suis une desc. Je suis une desc.',
                date: '27 Aout 2019'
            });
        }
        // if (number === 3) {
        //     this.setState({
        //         clicked: true,
        //         event3: true,
        //         title: 'Soirée mousse',
        //         price: 'free',
        //         organizer: 'Le bowl',
        //         description: 'Je suis une desc. Je suis une desc. Je suis une desc. Je suis une desc. Je suis une desc. Je suis une desc.',
        //         date: '28 Aout 2019'
        //     });
        // }
        // if (number === 4) {
        //     this.setState({
        //         clicked: true,
        //         event4: true,
        //         title: 'Soirée bar poker',
        //         price: 'free',
        //         organizer: 'Le bowl',
        //         description: 'Je suis une desc. Je suis une desc. Je suis une desc. Je suis une desc. Je suis une desc. Je suis une desc.',
        //         date: '28 Aout 2019'
        //     });
        // }
        // if (number === 6) {
        //     this.setState({
        //         clicked: true,
        //         event5: true,
        //         title: 'Concours de pétanque',
        //         price: 'free',
        //         organizer: 'Le bowl',
        //         description: 'Je suis une desc. Je suis une desc. Je suis une desc. Je suis une desc. Je suis une desc. Je suis une desc.',
        //         date: '02 Septembre 2019'
        //     });
        // }
        // if (number === 5) {
        //     this.setState({
        //         clicked: true,
        //         event5: true,
        //         title: 'Théatre le roi Lion',
        //         price: 'free',
        //         organizer: 'Le bowl',
        //         description: 'Je suis une desc. Je suis une desc. Je suis une desc. Je suis une desc. Je suis une desc. Je suis une desc.',
        //         date: '01 Septembre 2019'
        //     });
        // }
        // if (number === 7) {
        //     this.setState({
        //         clicked: true,
        //         event7: true,
        //         title: 'Théatre la belle au bois dormant',
        //         price: 'free',
        //         organizer: 'Le bowl',
        //         description: 'Je suis une desc. Je suis une desc. Je suis une desc. Je suis une desc. Je suis une desc. Je suis une desc.',
        //         date: '04 Septembre 2019'
        //     });
        // }
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("../node_modules/native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("../node_modules/native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("../node_modules/@expo/vector-icons/src/vendor/react-native-vector-icons/Fonts/Ionicons.ttf"),
        });
        this.setState({loading: false});
    }


    render() {

        const loading = <Expo.AppLoading/>;

        const showView = <Container>
            <Header/>
            <Content>
                <H1 style={{color: '#1c142a', fontSize: 50, paddingTop: 50, fontWeight: 'bold'}}>Découvrir...</H1>
                <Image onClick={() => this.renderEvent(1)}
                    style={{marginLeft: 25}}
                    source={require("../assets/firstEvent.png")}
                />
                <H2 style={{color: "#1c142a", marginTop: 50, fontWeight: 'bold'}}>Cette semaine</H2>
                <Card>
                    <CardItem onClick={()=> this.renderEvent(2)}>
                        <Left>
                            <Image
                                source={require("../assets/BsoN209EVK0EiHQDCs2Cfg.XmvlPQeNpSlK5rZlvkEPbg.adc620.jpg")}
                                style={{height: 50, width: 50, flex: 1}}/>
                        </Left>
                        <Body>
                        <H2 style={{fontSize: 15, lineHeight: 15}}>Degustation de vins à l'aveugle</H2>
                        <Text style={{color: "gray", fontSize: 10}}>Annecy, France</Text>
                        </Body>
                        <Right>
                            <Text style={{backgroundColor: '#1c142a', borderRadius: 40, padding: 10, color: '#ffffff'}}>27
                                Aout</Text>
                        </Right>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Image
                                source={require("../assets/BsoN209EVK0EiHQDCs2Cfg.XmvlPQeNpSlK5rZlvkEPbg.adc620.jpg")}
                                style={{height: 50, width: 50, flex: 1}}/>
                        </Left>
                        <Body>
                        <H2 style={{fontSize: 15, lineHeight: 15}}>Soirée mousse</H2>
                        <Text style={{color: "gray", fontSize: 10}}>Annecy, France</Text>
                        </Body>
                        <Right>
                            <Text style={{backgroundColor: '#1c142a', borderRadius: 40, padding: 10, color: '#ffffff'}}>27
                                Aout</Text>
                        </Right>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Image
                                source={require("../assets/BsoN209EVK0EiHQDCs2Cfg.XmvlPQeNpSlK5rZlvkEPbg.adc620.jpg")}
                                style={{height: 50, width: 50, flex: 1}}/>
                        </Left>
                        <Body>
                        <H2 style={{fontSize: 15, lineHeight: 15}}>Concours de pétanque</H2>
                        <Text style={{color: "gray", fontSize: 10}}>Annecy, France</Text>
                        </Body>
                        <Right>
                            <Text style={{backgroundColor: '#1c142a', borderRadius: 40, padding: 10, color: '#ffffff'}}>28
                                Aout</Text>
                        </Right>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Image
                                source={require("../assets/BsoN209EVK0EiHQDCs2Cfg.XmvlPQeNpSlK5rZlvkEPbg.adc620.jpg")}
                                style={{height: 50, width: 50, flex: 1}}/>
                        </Left>
                        <Body>
                        <H2 style={{fontSize: 15, lineHeight: 15}}>Théatre le roi Lion</H2>
                        <Text style={{color: "gray", fontSize: 10}}>Annecy, France</Text>
                        </Body>
                        <Right>
                            <Text style={{backgroundColor: '#1c142a', borderRadius: 40, padding: 10, color: '#ffffff'}}>01
                                Sept</Text>
                        </Right>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Image
                                source={require("../assets/BsoN209EVK0EiHQDCs2Cfg.XmvlPQeNpSlK5rZlvkEPbg.adc620.jpg")}
                                style={{height: 50, width: 50, flex: 1}}/>
                        </Left>
                        <Body>
                        <H2 style={{fontSize: 15, lineHeight: 15}}>Soirée bar poker</H2>
                        <Text style={{color: "gray", fontSize: 10}}>Annecy, France</Text>
                        </Body>
                        <Right>
                            <Text style={{backgroundColor: '#1c142a', borderRadius: 40, padding: 10, color: '#ffffff'}}>02
                                Sept</Text>
                        </Right>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Image
                                source={require("../assets/BsoN209EVK0EiHQDCs2Cfg.XmvlPQeNpSlK5rZlvkEPbg.adc620.jpg")}
                                style={{height: 50, width: 50, flex: 1}}/>
                        </Left>
                        <Body>
                        <H2 style={{fontSize: 15, lineHeight: 15}}>Théatre La belle au bois dormant</H2>
                        <Text style={{color: "gray", fontSize: 10}}>Annecy, France</Text>
                        </Body>
                        <Right>
                            <Text style={{backgroundColor: '#1c142a', borderRadius: 40, padding: 10, color: '#ffffff'}}>04
                                Sept</Text>
                        </Right>
                    </CardItem>
                </Card>
            </Content>
        </Container>;

        const showViewEvents = <Container>
            <Header/>
            <View>
                <Card style={{elevation: 3}}>
                    <CardItem cardBody>
                        <Image style={{height: 300, flex: 1}} source={require("../assets/logo.png")}/>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Thumbnail
                                source={require("../assets/BsoN209EVK0EiHQDCs2Cfg.XmvlPQeNpSlK5rZlvkEPbg.adc620.jpg")}/>
                            <Body>
                            <Text>>Organisé par {this.state.organizer}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                </Card>
            </View>
        </Container>;

        return (
            <View style={styles.MainContainer}>
                {this.state.loading === false && this.state.clicked === false ? showView : loading}
                {this.state.loading === false && this.state.clicked === true ? showViewEvents : loading}
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