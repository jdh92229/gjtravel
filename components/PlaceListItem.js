import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
export default class PlaceListItem extends React.Component {
    render () {
        const item = this.props.item
        return (
            <View style={styles.item}>

            <Image
            style={{width: 50, height: 50}}
            source={{uri:item.geojetourMainImg}}/>

                <Text
                    style={styles.itemTitle}
                    numberOfLines={3}
                    ellipsizeMode={'tail'}
                >
                    { item.geojetourNm }
                </Text>
                <Text
                    style={styles.itemCreator}
                    numberOfLines={2}
                    ellipsizeMode={'tail'}
                >
                    { item.geojetourAddr }
                </Text>
                <Text style={styles.itemDate}>{ item.geojetourCdNm }</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    item: {
        padding: 15,
        borderBottomColor: '#eee',
        borderBottomWidth: 1
    },
    itemTitle: {
        fontSize: 14,
        lineHeight: 14 * 1.6,
        fontWeight: 'bold'
    },
    itemCreator: {
        marginTop: 8,
        fontSize: 13,
        lineHeight: 13 * 1.6,
        color: '#666'
    },
    itemDate: {
        marginTop: 8,
        fontSize: 13,
        color: '#c00'
    }
})