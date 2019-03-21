import React from 'react'
import { View, StyleSheet, FlatList, Text } from 'react-native'
import { Toolbar, ListItem } from 'react-native-material-ui'
import { accentColor, lightColor, backgroundColor } from '../../constants/Colors'

export default class HomePollScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {polls: require('./dummyData/dummyList.json')}
  }

  render () {
    return (
      <View style={styles.container}>
        <Toolbar
          leftElement="menu"
          onLeftElementPress={() => this.props.navigation.toggleDrawer()}
          centerElement={'Enquetes'}
          rightElement="search"
        />
        <View>
          <FlatList
            data={this.state.polls}
            renderItem={({item}) => <ListItem
              numberOfLines='dynamic'
              style={listItem}
              centerElement={{
                primaryText: `${item.author.name}  |  Votos: ${item.numberOfVotes}`,
                secondaryText: item.title,
              }}
              onPress={() => {}}
            />}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    )
  }
}

const listItem = StyleSheet.create({
  container: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: lightColor,
  },
  primaryText: {
    color: accentColor,
    fontWeight: 'bold',
  }

})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
})
