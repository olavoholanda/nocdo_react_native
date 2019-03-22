import React from 'react'
import { Text, View } from 'react-native'

class ShowPollScreen extends React.Component {
  constructor (props) {
    super(props)
    const polls = require('./dummyData/dummyList.json')

    const {navigation} = this.props
    const pollId = navigation.getParam('pollId', 'NO-ID')

    const selectedPoll = polls.find(p => p.id === pollId)
    this.state = {poll: selectedPoll}
  }

  render () {
    const {poll} = this.state
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>
          {poll.title}
        </Text>
      </View>
    )
  }
}

export default ShowPollScreen