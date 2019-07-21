import React from 'react'
import {StyleSheet, View} from 'react-native'

class Profil extends React.Component {

    static navigationOptions = {
        tabBarLabel: 'Profil'
    };
    render() {
        return (
            <View style={styles.MainContainer }>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,

    },
});

export default Profil