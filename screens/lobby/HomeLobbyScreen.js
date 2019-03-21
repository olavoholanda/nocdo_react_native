import React from 'react'
import {Text, View} from 'react-native'
import { Toolbar } from 'react-native-material-ui'

class HomeLobbyScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Toolbar
          leftElement="menu"
          onLeftElementPress={() => this.props.navigation.toggleDrawer()}
          centerElement={'Portaria'}
        />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>
            Home Lobby Screen
          </Text>
        </View>
      </View>
    )
  }
}

export default HomeLobbyScreen;