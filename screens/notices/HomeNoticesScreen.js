import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Card, ListItem, Toolbar } from 'react-native-material-ui'
import { accentColor, backgroundColor, darkTextColor, lightGreyColor } from '../../constants/Colors'
import Divider from 'react-native-material-ui/src/Divider'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  cardText: {
    color: darkTextColor,
    fontSize: 12,
    textAlign: 'justify'
  }
})

const listItem = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  primaryText: {
    color: accentColor,
    fontWeight: 'bold',
    fontSize: 14,
  },
  secondaryText: {
    color: lightGreyColor,
    fontSize: 14,
    fontStyle: 'italic'
  },
})

class HomeNoticesScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {notices: require('./dummyData/dummyList.json')}
  }

  render () {
    return (
      <View style={styles.container}>
        <Toolbar
          leftElement="menu"
          onLeftElementPress={() => this.props.navigation.toggleDrawer()}
          centerElement={'Avisos'}
          rightElement="add"
          onRightElementPress={() => this.props.navigation.navigate('NoticeCreate')}
        />
        <ScrollView style={{flex: 1, padding: 15}}>
          <FlatList
            data={this.state.notices}
            renderItem={({item}) => <Card>
              <ListItem
                numberOfLines='dynamic'
                style={listItem}
                centerElement={{
                  primaryText: item.title,
                  secondaryText: new Date(item.date).toLocaleDateString(),
                }}
              />
              <Divider/>
              <View style={{padding: 15}}>
                <Text style={styles.cardText}>{item.description}</Text>
              </View>

            </Card>}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </View>
    )
  }
}

export default HomeNoticesScreen