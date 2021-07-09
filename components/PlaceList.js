import React from 'react'
import { Text, View, FlatList } from 'react-native'
import PlaceListItem from './PlaceListItem'
export default class PlacesList extends React.Component {
    state = {
        items: [],
        page: 1
    }
    async componentDidMount () {
        const feed = await this.props.fetchEntry()
        const items = feed.list
        this.setState({ items })
    }
    _keyExtractor = (item, index) => item.geojetourId
    _renderItem = ({ item }) => (
        <PlaceListItem item={item} />
    )
    render () {
        return (
            <FlatList
                //data : 만들고자 하는 리스트의 source를 담는 prop
                data={this.state.items}
                //해당 데이터가 변경시에 FlatList가 리렌더링되는 속성
                extraData={this.state.items}
                //item에 고유 key를 부여
                keyExtractor={this._keyExtractor}
                //renderItem : data로 받은 소스들 그 각각의 item들을 render 시켜주는 콜백함수
                renderItem={this._renderItem}
            />
        )
    }
}