import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button, ListItem, Toolbar } from 'react-native-material-ui'
import { backgroundColor, darkTextColor, lightColor, greenColor } from '../../constants/Colors'

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

const buttonStyle = StyleSheet.create({
  container: {
    borderRadius: 0,
    height: 60,
    backgroundColor: greenColor
  },
})

class ShowPollScreen extends React.Component {
  constructor (props) {
    super(props)
    const polls = require('./dummyData/dummyList.json')

    const {navigation} = this.props
    const pollId = navigation.getParam('pollId', 'NO-ID')

    const selectedPoll = polls.find(p => p.id === pollId)
    this.state = {poll: selectedPoll, selectedOption: '-1'}
  }

  _onPressOption (id) {
    this.setState({
      selectedOption: id
    })
  }

  _renderSubmitButton (pollId) {
    return this.state.selectedOption === '-1' ? null : (
      <Button
        raised
        accent
        style={buttonStyle}
        text="Confirmar"
        icon="check"
        onPress={() => this.props.navigation.navigate('PollResult', {pollId: pollId})}
      />
      )
  }

  render () {
    const {poll} = this.state
    return (
      <View style={styles.container}>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={() => this.props.navigation.goBack()}
          centerElement={'Enquete'}
        />
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.headerText}>{poll.title}</Text>
          </View>
          <FlatList
            extraData={this.state}
            data={poll.options}
            renderItem={({item}) => <ListItem
              numberOfLines='dynamic'
              style={{
                container: {
                  margin: 10,
                  backgroundColor: this.state.selectedOption === item.id ? lightColor : 'white',
                },
                primaryText: {
                  color: darkTextColor,
                },
              }}
              centerElement={{
                primaryText: item.title,
              }}
              onPress={() => this._onPressOption(item.id)}
            />}
            keyExtractor={item => item.id}
          />
        </ScrollView>
        {this._renderSubmitButton(poll.id)}
      </View>
    )
  }
}

export default ShowPollScreen