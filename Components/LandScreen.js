import React from 'react'
import {StyleSheet, View, Image, Button} from 'react-native'

class LandScreen extends React.Component {
    render() {
        return (
            <View style={styles.MainContainer }>
                <Image
                    style={{flex:1, height: undefined, width: undefined}}
                    source={require('C:\\Users\\lordo\\WebstormProjects\\Mover\\assets\\logo.png')}
                    resizeMode="contain"
                />
                <View>
                <Button style={{flex: 2, marginBottom: 30}} title='Ce connecter' onPress={() => {}}/>
                <Button style={{flex: 2, marginBottom: 30}} title="S'inscrire" onPress={() => {}}/>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,

    },
    buttonContainer: {
        flex: 1,
    },

});

export default LandScreen