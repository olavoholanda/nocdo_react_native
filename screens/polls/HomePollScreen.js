import React from 'react'
import { View, StyleSheet, FlatList, ScrollView } from 'react-native'
import { Toolbar } from 'react-native-material-ui'
import PollListItem from '../../components/poll/PollListItem'
import { backgroundColor } from '../../constants/Colors'

export default class HomePollScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {polls: require('./dummyData/dummyList.json')}
  }

  _onItemPress = (status, pollId) => {
    const route = status === 'open' ? 'PollShow' : 'PollResult'
    this.props.navigation.navigate(route, {pollId: pollId})
  }

  render () {
    return (
      <View style={styles.container}>
        <Toolbar
          leftElement="menu"
          onLeftElementPress={() => this.props.navigation.toggleDrawer()}
          centerElement={'Enquetes'}
          rightElement="add"
          onRightElementPress={() => this.props.navigation.navigate('PollCreate')}
        />
        <ScrollView>
          <FlatList
            data={this.state.polls}
            renderItem={({item}) => <PollListItem item={item} onPress={() => this._onItemPress(item.status, item.id)}/>}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
})
