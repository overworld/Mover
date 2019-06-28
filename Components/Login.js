import React from 'react'
import {StyleSheet, View, TextInput, Button, Image, TouchableWithoutFeedback, StatusBar, Keyboard} from 'react-native'

class Login extends React.Component {
    render() {
        return (
            <View style={styles.MainContainer}>
                <View style = {styles.LogoContainer}>
                    <Image style={styles.logo}
                           source={require('../assets/logo.png')}>
                    </Image>
                    <TextInput style={styles.title} placeholder='Adresse Email' />
                    <TextInput style={styles.title} placeholder='Mot de passe' />

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
        color: '#FF204C',
        textAlign: 'center',
        fontSize: 18
    },

});

export default Login