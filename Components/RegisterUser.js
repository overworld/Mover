import React from 'react'
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

class RegisterUser extends React.Component {
    render() {


        return (
            <View>
                <Container>
                    <Header>
                    </Header>
                    <Content
                        style={{
                            flexGrow: 1,
                            backgroundColor: '#0e0125',
                            textAlign: 'center',
                        }}
                    >
                        <H2  style={{
                            color: '#ffffff'
                        }}>
                            Quels sont vos centres d'intêrets ?
                        </H2>
                        <Text  style={{
                            color: '#ffffff'
                        }}>
                            Ces données nous permettrons d'affiner nos propositions d'événements
                        </Text>

                        <Text  style={{
                            color: '#fe6425',
                            marginTop: '10%',
                        }}>
                            Choisissez au maximum 5 types d'événements
                        </Text>
                    </Content>
                </Container>
            </View>
        )
    }

}

export default RegisterUser