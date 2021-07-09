import React from 'react'
import { Text, View, FlatList } from 'react-native'
import PlaceListItem from './PlaceListItem'
export default class PlacesList extends React.Component {
    state = {
        items: []
    }
    async componentDidMount () {
        const feed = await this.props.fetchEntry()
        const items = feed.list
        // console.log(items)
        this.setState({ items })
    }
    _keyExtractor = (item, index) => item.link
    _renderItem = ({ item }) => (
        <PlaceListItem item={item} />
    )
    render () {
        return (
            <FlatList
                data={this.state.items}
                extraData={this.state.items}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
            />
        )
    }
}