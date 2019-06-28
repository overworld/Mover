import React from 'react'
import {StyleSheet, View, Image, Button, Text, TextInput, FlatList} from 'react-native'
import Navigator from "./Navigator";
import Events from "../Helpers/EventData";
import EventItem from "./EventItem";

class SearchScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    _onPressButton() {
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <View style={styles.main_container}>
                <TextInput style={styles.textinput} placeholder='Rechercher un évènement'/>
                <Button title='Rechercher' onPress={() => {
                }}/>
                <FlatList
                    data={Events}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <EventItem event={item}/>}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    main_container: {
        height: 190,
        flexDirection: "row",

    },
    content_container: {
        flex: 1,
        margin: 5
    },
    image: {
        width: 120,
        height: 180,
        margin: 5,
        backgroundColor: 'gray'
    },

    name_text: {
        fontWeight: 'bold',
        fontSize: 18,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    price:{
        fontWeight: 'bold',
        fontSize: 26,
        color: '#666666'
    },
    theme: {

    },
    date: {

    },
    description: {
        textAlign: 'left',
        fontSize: 12
    },
    date_container: {
        flex: 1
    },
    header_container: {
        flex: 3,
        flexDirection: 'row'
    },
    description_container: {
        flex: 7
    },
});

export default SearchScreen