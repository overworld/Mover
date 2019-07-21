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
    Body,
    Left,
    Right,
    Title,
    Button,
    Text
} from 'native-base';
import {Image, StyleSheet, View} from "react-native";
import * as Expo from "expo";
import ProfileScreen from "./ProfileScreen";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            idUser: null,
            email: "",
            password: "",
            connected: false
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

    toConnect() {
        let email = this.state.email;
        let password = this.state.password;
        if (email !== "" && password !== "") {
            this.getUsers(email, password);
        }
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
            <Content>
                <Image
                    source={require("../assets/logo.png")}
                    style={{
                        flexGrow: 1,
                        height: 100,
                        width: 350
                    }}/>
                <Form>
                    <Item stackedLabel>
                        <Label>Email</Label>
                        <Input onChangeText={(email) => this.setState({email})}></Input>
                    </Item>
                    <Item stackedLabel last>
                        <Label>Password</Label>
                        <Input onChangeText={(password) => this.setState({password})}></Input>
                    </Item>
                    <Button success
                            onPress={() => this.toConnect()}
                            style={{
                                marginLeft: '10%',
                                marginTop: '5%',
                                width: '80%',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                        <Text
                            style={{
                                paddingBottom: 8,
                            }}> Se connecter </Text>
                    </Button>
                </Form>
                <Button primary
                        style={{
                            marginLeft: '10%',
                            marginTop: '20%',
                            width: '80%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                ><Text
                    style={{
                        paddingTop: 8,
                    }}>Inscription</Text></Button>
            </Content>
        </Container>;

        const showViewConnected = <Navigator idUser={this.state.idUser}/>;


        return (
            <View style={styles.MainContainer}>
                {this.state.loading === false && this.state.connected === false ? showView : loading}
                {this.state.loading === false && this.state.connected === true ? showViewConnected : loading}
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