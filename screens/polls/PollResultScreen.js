import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Toolbar } from 'react-native-material-ui'
import { backgroundColor, darkTextColor } from '../../constants/Colors'
import PollOptionResultItem from '../../components/poll/PollOptionResultItem'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  headerText: {
    color: darkTextColor,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
})

class PollResultScreen extends React.Component {
  constructor (props) {
    super(props)
    const polls = require('./dummyData/dummyList.json')

    const {navigation} = this.props
    const pollId = navigation.getParam('pollId', 'NO-ID')

    const selectedPoll = polls.find(p => p.id === pollId)

    //calculates the percentage
    const totalVotes = selectedPoll.numberOfVotes
    selectedPoll.options.map(op => {
      op.percent = op.numberOfVotes / totalVotes * 100
      return op
    })

    this.state = {poll: selectedPoll, selectedOption: '1'}
  }

  render () {
    const {poll} = this.state
    poll.selected = '1'

    return (
      <View style={styles.container}>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={() => this.props.navigation.navigate('InnerHome')}
          centerElement={'Resultado de enquete'}
        />
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.headerText}>{poll.title}</Text>
          </View>
          <FlatList
            extraData={this.state}
            data={poll.options}
            renderItem={({item}) => <PollOptionResultItem title={item.title} percent={item.percent}
                                                          selected={poll.selected === item.id} winner={item.winner}/>}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </View>
    )
  }
}

export default PollResultScreen