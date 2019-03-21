import React from 'react'
import {Text, View} from 'react-native'
import { Toolbar } from 'react-native-material-ui'

class HomeDocumentsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Toolbar
          leftElement="menu"
          onLeftElementPress={() => this.props.navigation.toggleDrawer()}
          centerElement={'Documentos'}
        />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>
            Home Documents Screen
          </Text>
        </View>
      </View>
    )
  }
}

export default HomeDocumentsScreen;