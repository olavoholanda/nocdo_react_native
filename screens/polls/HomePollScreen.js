import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { Button, Toolbar } from 'react-native-material-ui'

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
      <View styles={styles.container}>
        <Toolbar
          leftElement="menu"
          onLeftElementPress={() => this.props.navigation.toggleDrawer()}
          centerElement={'Enquetes'}
          rightElement="search"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
