import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
export default class PlaceListItem extends React.Component {
    render () {
        const list = this.props.list
        return (
            <View style={styles.list}>
                <Text
                    style={styles.listTitle}
                    numberOfLines={3}
                    ellipsizeMode={'tail'}
                >
                    { list.geojetourNm }
                </Text>
                <Text
                    style={styles.listCreator}
                    numberOfLines={2}
                    ellipsizeMode={'tail'}
                >
                    { list.geojetourNm.toString() }
                </Text>
                <Text style={styles.itemDate}>{ list.pubDate.toString() }</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    list: {
        padding: 15,
        borderBottomColor: '#eee',
        borderBottomWidth: 1
    },
    listTitle: {
        fontSize: 14,
        lineHeight: 14 * 1.6,
        fontWeight: 'bold'
    },
    listCreator: {
        marginTop: 8,
        fontSize: 13,
        lineHeight: 13 * 1.6,
        color: '#666'
    },
    listDate: {
        marginTop: 8,
        fontSize: 13,
        color: '#c00'
    }
})