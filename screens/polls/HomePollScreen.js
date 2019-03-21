import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'

const FirstRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#ff4081'}]}/>
)
const SecondRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#673ab7'}]}/>
)

export default class HomePollScreen extends React.Component {
  state = {
    index: 0,
    routes: [
      {key: 'first', title: 'First'},
      {key: 'second', title: 'Second'},
    ],
  }

  render () {
    return (
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
        onIndexChange={index => this.setState({index})}
        initialLayout={{width: Dimensions.get('window').width}}
      />
    )
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
})
