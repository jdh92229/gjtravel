import React from 'react'
import PlaceList from './components/PlaceList'
import { View } from 'react-native'
import { fetchHotEntry } from './components/FetchApi'
export default class App extends React.Component {
  render() {
    return (
        <View style={{marginTop: 20}}>
          <PlaceList fetchEntry={fetchHotEntry} />
        </View>
    )
  }
}