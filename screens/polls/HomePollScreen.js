import React from 'react'
import { View, StyleSheet, FlatList, Text, ScrollView } from 'react-native'
import { Toolbar } from 'react-native-material-ui'
import PollListItem from '../../components/PollListItem'
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
        <ScrollView>
          <FlatList
            data={this.state.polls}
            renderItem={({item}) => <PollListItem item={item} onPress={() => this.props.navigation.navigate('ShowPoll', {pollId: item.id})}/>}
            keyExtractor={item => item.id}
          />
        </ScrollView>
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
