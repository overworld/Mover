import React from 'react'
import * as Expo from "expo";
import {StyleSheet, View, Image, TextInput, FlatList} from 'react-native';

import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Thumbnail,
    Body,
    Text,
    Button,
    Icon,
    Left,
    Right
} from 'native-base';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("../node_modules/native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("../node_modules/native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("../node_modules/@expo/vector-icons/src/vendor/react-native-vector-icons/Fonts/Ionicons.ttf"),
        });
        this.setState({ loading: false });
    }

    render() {
        const loading = <Expo.AppLoading />;

        const showView =
            <View style={styles.MainContainer}>
                <Text style={styles.title}></Text>
            </View>;

        return (
            <View style={styles.MainContainer}>
                {this.state.loading === false ? showView : loading}
            </View>
        )
    }

}

const styles = StyleSheet.create({

});

export default Splash