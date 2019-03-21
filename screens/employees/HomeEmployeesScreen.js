import React from 'react'
import {Text, View} from 'react-native'
import { Toolbar } from 'react-native-material-ui'

class HomeEmployeesScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Toolbar
          leftElement="menu"
          onLeftElementPress={() => this.props.navigation.toggleDrawer()}
          centerElement={'Colaboradores'}
        />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>
            Home Employees Screen
          </Text>
        </View>
      </View>
    )
  }
}

export default HomeEmployeesScreen;