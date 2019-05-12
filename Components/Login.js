import React from 'react'
import {StyleSheet, View, TextInput, Button, Image, TouchableWithoutFeedback, StatusBar, Keyboard} from 'react-native'

class Login extends React.Component {
    render() {
        return (
            <View style={styles.MainContainer}>
                <View style = {styles.LogoContainer}>
                    <Image style={styles.logo}
                           source={'C:\\Users\\lordo\\WebstormProjects\\Mover\\assets\\logo.png'}>
                    </Image>
                    <text style={styles.title}> Adresse Email</text>
                    <text style={styles.title}> Mot de passe</text>

                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#250332'

    },
    LogoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 128,
        height:56,
    },
    title: {
        code: '#FF204C',
        textAlign: 'center',
        fontsize: 18
    },

});

export default Login