import React, {Component} from 'react';
import Navigator from "./Navigator";
import {
    Container,
    Header,
    Content,
    Form,
    Item,
    Input,
    Label,
    CardItem,
    H2,
    Body,
    Left,
    Right,
    Title,
    Button,
    Text
} from 'native-base';
import {Image, StyleSheet, View} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import * as Expo from "expo";
import ProfileScreen from "./ProfileScreen";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            register: false,
            register2: false,
            loading: true,
            idUser: null,
            email: "",
            password: "",
            connected: false,
            color1: 'transparent',
            color2: 'transparent',
            color3: 'transparent',
            color4: 'transparent',
            color5: 'transparent',
            color6: 'transparent',
        };
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("../node_modules/native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("../node_modules/native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("../node_modules/@expo/vector-icons/src/vendor/react-native-vector-icons/Fonts/Ionicons.ttf"),
        });
        this.setState({loading: false});
    }

    createAccount(){
        this.setState({register: false, register2: false});
    }

    changeColor(color) {
        if (color === 1) {
            if (this.state.color1 === '#ff5a22') {
                this.setState({color1: 'transparent'})
            } else {
                this.setState({color1: '#ff5a22'})
            }
        }
        if (color === 2) {
            if (this.state.color2 === '#ff5a22') {
                this.setState({color2: 'transparent'})
            } else {
                this.setState({color2: '#ff5a22'})
            }
        }
        if (color === 2) {
            if (this.state.color2 === '#ff5a22') {
                this.setState({color2: 'transparent'})
            } else {
                this.setState({color2: '#ff5a22'})
            }
        }
        if (color === 3) {
            if (this.state.color3 === '#ff5a22') {
                this.setState({color3: 'transparent'})
            } else {
                this.setState({color3: '#ff5a22'})
            }
        }
        if (color === 4) {
            if (this.state.color4 === '#ff5a22') {
                this.setState({color4: 'transparent'})
            } else {
                this.setState({color4: '#ff5a22'})
            }
        }
        if (color === 5) {
            if (this.state.color5 === '#ff5a22') {
                this.setState({color5: 'transparent'})
            } else {
                this.setState({color5: '#ff5a22'})
            }
        }
        if (color === 6) {
            if (this.state.color6 === '#ff5a22') {
                this.setState({color6: 'transparent'})
            } else {
                this.setState({color6: '#ff5a22'})
            }
        }
    }

    toConnect() {
        let email = this.state.email;
        let password = this.state.password;
        if (email !== "" && password !== "") {
            this.getUsers(email, password);
        }
    }

    register() {
        this.setState({register: true});
    }
    register2() {
        this.setState({register2: true});
    }

    getUsers(email, password) {
        return fetch('http://mover.florianthe.fr/api/user/getall')
            .then((response) => response.json())
            .then((responseJson) => {
                responseJson.map((userData) => {
                    if (email === userData.email && password === userData.password) {
                        this.setState({connected: true, idUser: userData.id});
                    }
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        const loading = <Expo.AppLoading/>;
        const showView = <Container>
            <Header>
            </Header>
            <Content
                style={{
                    flexGrow: 1,
                    backgroundColor: '#0e0125',
                    textAlign: 'center',
                }}
            >
                <Image
                    source={require("../assets/logo.png")}
                    style={{
                        flexGrow: 1,
                        height: 100,
                        width: 350
                    }}/>
                <Form>
                    <Item stackedLabel
                          style={{
                              color: '#ffffff',
                              marginTop: '10%'
                          }}>
                        <Label
                            style={{
                                color: '#ffffff',
                                marginLeft: '5%'
                            }}>Email</Label>
                        <Input onChangeText={(email) => this.setState({email})} style={{
                            color: '#ffffff',
                        }}></Input>
                    </Item>
                    <Item stackedLabel last
                          style={{
                              color: '#ffffff',
                              width: '90%',
                              marginLeft: '5%'
                          }}>
                        <Label
                            style={{
                                color: '#ffffff',
                            }}>Mot de passe</Label>
                        <Input secureTextEntry={true} onChangeText={(password) => this.setState({password})}></Input>
                    </Item>
                    <Text style={{
                        textAlign: 'right',
                        textDecorationLine: "underline",
                        textDecorationStyle: "dotted",
                        textDecorationColor: "#ffffff",
                        color: '#ffffff',
                        marginTop: '5%'
                    }}>Mot de passe oublié ?</Text>
                    <Button
                        onPress={() => this.toConnect()}
                        style={{
                            width: '80%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 40,
                            marginLeft: '10%',
                            marginTop: '5%',
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
                                    }}> Se connecter </Text>
                            </View>
                        </LinearGradient>

                    </Button>

                </Form>

                <H2 style={{
                    marginTop: '20%',
                    color: '#ffffff',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center'
                }}>PAS ENCORE INSCRIT ?</H2>

                <Button bordered light
                        onPress={() => this.register()}
                        style={{
                            marginLeft: '10%',
                            marginTop: '5%',
                            width: '80%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 40,
                        }}
                ><Text
                    style={{
                        paddingTop: 8,
                    }}>Inscription</Text></Button>
            </Content>
        </Container>;

        const showViewConnected = <Navigator idUser={this.state.idUser}/>;
        const showViewRegister = <Container>
            <Header>
            </Header>
            <Content
                style={{
                    flexGrow: 1,
                    backgroundColor: '#0e0125',
                    textAlign: 'center',
                    paddingLeft: 10
                }}
            >
                <H2 style={{
                    color: '#ffffff',
                    marginTop: '10%'
                }}>
                    Quels sont vos centres d'intêrets ?
                </H2>
                <Text style={{
                    color: '#ffffff'
                }}>
                    Ces données nous permettrons d'affiner nos propositions d'événements
                </Text>

                <Text style={{
                    color: '#fe6425',
                    marginTop: '10%',
                    marginBottom: '10%'
                }}>
                    Choisissez au maximum 5 types d'événements
                </Text>

                <Content>
                    <Button bordered light
                            onPress={() => this.changeColor(1)}
                            style={{
                                borderRadius: 40,
                                marginTop: 10,
                                backgroundColor: this.state.color1
                            }}
                    ><Text>Concerts</Text></Button>
                    <Button bordered light
                            onPress={() => this.changeColor(2)}
                            style={{
                                borderRadius: 40,
                                marginTop: 10,
                                backgroundColor: this.state.color2
                            }}
                    ><Text>Bars</Text></Button>
                    <Button bordered light
                            onPress={() => this.changeColor(3)}
                            style={{
                                borderRadius: 40,
                                marginTop: 10,
                                backgroundColor: this.state.color3
                            }}
                    ><Text>Sport</Text></Button>
                    <Button bordered light
                            onPress={() => this.changeColor(4)}
                            style={{
                                borderRadius: 40,
                                marginTop: 10,
                                backgroundColor: this.state.color4
                            }}
                    ><Text>Arts</Text></Button>
                    <Button bordered light
                            onPress={() => this.changeColor(5)}
                            style={{
                                borderRadius: 40,
                                marginTop: 10,
                                backgroundColor: this.state.color5
                            }}
                    ><Text>Festival</Text></Button>
                    <Button bordered light
                            onPress={() => this.changeColor(6)}
                            style={{
                                borderRadius: 40,
                                marginTop: 10,
                                backgroundColor: this.state.color6
                            }}
                    ><Text>Boite de nuits</Text></Button>
                </Content>

                <Button
                    onPress={() => this.register2()}
                    style={{
                        width: '50%',
                        textAlign: 'right',
                        borderRadius: 40,
                        marginLeft: '45%',
                        marginTop: '25%',
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
                                }}> Suivant </Text>
                        </View>
                    </LinearGradient>
                </Button>
            </Content>
        </Container>;

        const showViewRegister2 = <Container>
            <Header>
            </Header>
            <Content
                style={{
                    flexGrow: 1,
                    backgroundColor: '#0e0125',
                    textAlign: 'center',
                    paddingLeft: 10
                }}
            >
                <Image
                    source={require("../assets/logo.png")}
                    style={{
                        flexGrow: 1,
                        height: 100,
                        width: 350
                    }}/>
                <Form>
                    <Item stackedLabel
                          style={{
                              color: '#ffffff',
                              marginTop: '10%'
                          }}>
                        <Label
                            style={{
                                color: '#ffffff',
                                marginLeft: '5%'
                            }}>Email</Label>
                        <Input style={{
                            color: '#ffffff',
                        }}></Input>
                    </Item>
                    <Item stackedLabel last
                          style={{
                              color: '#ffffff',
                              width: '90%',
                              marginLeft: '5%'
                          }}>
                        <Label
                            style={{
                                color: '#ffffff',
                            }}>Mot de passe</Label>
                        <Input secureTextEntry={true}></Input>
                    </Item>
                    <Item stackedLabel last
                          style={{
                              color: '#ffffff',
                              width: '90%',
                              marginLeft: '5%'
                          }}>
                        <Label
                            style={{
                                color: '#ffffff',
                            }}>Confirmer le mot de passe</Label>
                        <Input secureTextEntry={true}></Input>
                    </Item>
                    <Button
                        onPress={() => this.createAccount()}
                        style={{
                            width: '80%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 40,
                            marginLeft: '10%',
                            marginTop: '5%',
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
                                    }}> CREER UN COMPTE </Text>
                            </View>
                        </LinearGradient>
                    </Button>
                </Form>
            </Content>
        </Container>;


        return (
            <View style={styles.MainContainer}>
                {this.state.loading === false && this.state.connected === false && this.state.register === false && this.state.register2 === false ? showView : loading}
                {this.state.loading === false && this.state.connected === true && this.state.register === false && this.state.register2 === false ? showViewConnected : loading}
                {this.state.loading === false && this.state.connected === false && this.state.register === true && this.state.register2 === false ? showViewRegister : loading}
                {this.state.register2 === true ? showViewRegister2 : loading}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
    },
});

export default Login