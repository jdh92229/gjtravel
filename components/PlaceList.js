import React from 'react'
import PlaceListItem from './PlaceListItem'
import { Text, View, FlatList } from 'react-native'

export default class PlaceList extends React.Component {
    state = {
        lists: []
    }
    async componentDidMount () {
        const feed = await this.props.fetchEntry()
        const lists = feed.list
        console.log("테스트")
        console.log(lists)
        this.setState({ lists })
    }
    _keyExtractor = (list, index) => list.link
    _renderItem = ({ list }) => (
        <PlaceListItem list={list} />
    )
    render () {
        return (
            <FlatList
                data={this.state.lists}
                extraData={this.state.lists}
                keyExtractor={this._keyExtractor}
                renderList={this._renderItem}
            />
        )
    }
}