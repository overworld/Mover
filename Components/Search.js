import React from 'react'
import Events from '../Helpers/EventData'
import {StyleSheet, View, TextInput, Button, FlatList, Text} from 'react-native'
import EventItem from "./EventItem";



class Search extends React.Component {

    render() {
        return (
            <View style={styles.MainContainer}>
                <TextInput style={styles.textinput} placeholder='Rechercher un évènement'/>
                <Button title='Rechercher' onPress={() => {}}/>
                <FlatList
                    data={Events}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <EventItem event={item}/>}
                />
                <AppSearch/>
            </View>

        )
    }

}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        marginTop: 30,

    },
    textinput: {
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }
});

export default Search