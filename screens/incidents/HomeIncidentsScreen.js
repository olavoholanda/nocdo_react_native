import React from 'react'
import {Text, View} from 'react-native'
import { Toolbar } from 'react-native-material-ui'

class HomeIncidentsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Toolbar
          leftElement="menu"
          onLeftElementPress={() => this.props.navigation.toggleDrawer()}
          centerElement={'Ocorrências'}
        />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>
            Home Incidents Screen
          </Text>
        </View>
      </View>
    )
  }
}

export default HomeIncidentsScreen;