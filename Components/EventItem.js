import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class EventItem extends React.Component {
    render() {
        const event = this.props.event;

        return (
            <View style={styles.main_container}>
                <Image
                    style={styles.image}
                    source={{uri: "../assets/BsoN209EVK0EiHQDCs2Cfg.XmvlPQeNpSlK5rZlvkEPbg.adc620.jpg"}}
                />
                <View style={styles.content_container}>
                    <View style={styles.header_container}>
                        <Text style={styles.name_text}>{event.name}</Text>
                        <Text style={styles.price}>{event.price}</Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.description} numberOfLines={6}>{event.description}</Text>
                    </View>
                    <View style={styles.date_container}>
                        <Text style={styles.date}>{event.date_begin}</Text>
                    </View>
                </View>
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

export default EventItem