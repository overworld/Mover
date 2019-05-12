import React from 'react'
import {StyleSheet, View} from 'react-native'

class Splash extends React.Component {
    render() {
        return (
            <View style={styles.MainContainer}>
                <text style={styles.title}></text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    title: {
        fontWeight: 'bold',
        fontsize: 18,

    },
});

export default Splash