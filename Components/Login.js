import React from 'react'
import {StyleSheet, View, TextInput, Button, Image, Text} from 'react-native'

class Login extends React.Component {
    render() {
        return (
            <View style={styles.MainContainer}>
                <View style = {styles.LogoContainer}>
                    <Image style={styles.logo} source={'C:\\Users\\lordo\\WebstormProjects\\Mover\\assets\\logo.png'}>
                    </Image>
                    <TextInput style={styles.title} placeholder='Adresse Mail'/>
                    <TextInput style={styles.title} placeholder='Mot de passe'/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        flexDirection: 'column',
        //backgroundColor: '#250332'

    },
    LogoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderLeftWidth: 4,
        borderRightWidth: 4,
        height: 70,
    },
    logo: {
        width: 128,
        height:56,
    },
    title: {
        color: '#ff214b',
        fontSize: 18,
        paddingLeft: 15,
        paddingRight: 15
    },

});

export default Login