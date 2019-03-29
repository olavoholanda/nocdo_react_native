import React from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Toolbar, ListItem } from 'react-native-material-ui'
import { accentColor, backgroundColor, darkTextColor, greyTextColor, lightGreyColor } from '../../constants/Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  headerImg: {
    backgroundColor: backgroundColor,
    height: 40,
    width: 40,
    borderRadius: 20,
  },
})

const listItem = StyleSheet.create({
  container: {
    backgroundColor: backgroundColor,
  },
  primaryText: {
    color: accentColor,
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondaryText: {
    color: lightGreyColor,
    fontSize: 14,
    fontStyle: 'italic'
  },
  tertiaryText: {
    color: darkTextColor,
    fontSize: 16,
  },
})

class HomeIncidentsScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {incidents: require('./dummyData/dummyList.json')}
  }

  render () {
    return (
      <View style={styles.container}>
        <Toolbar
          leftElement="menu"
          onLeftElementPress={() => this.props.navigation.toggleDrawer()}
          centerElement={'Ocorrências'}
          rightElement="add"
          onRightElementPress={() => this.props.navigation.navigate('IncidentCreate')}
        />
        <ScrollView>
          <FlatList
            data={this.state.incidents}
            renderItem={({item}) => <ListItem
              divider
              style={listItem}
              numberOfLines='dynamic'
              leftElement={<Image source={{uri: item.author.avatar}} style={styles.headerImg}/>}
              centerElement={{
                primaryText: item.author.name,
                secondaryText: new Date(item.date).toLocaleDateString(),
                tertiaryText: item.title
              }}
            />}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </View>
    )
  }
}

export default HomeIncidentsScreen;