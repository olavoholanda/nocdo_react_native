import React from 'react'
import { View } from 'react-native'
import InnerDrawerNavigator from '../navigation/InnerDrawerNavigator'

class HomeScreen extends React.Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <InnerDrawerNavigator/>
      </View>
    )
  }
}

export default HomeScreen