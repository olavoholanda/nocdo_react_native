import React from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList, Image, Linking } from 'react-native'
import { Toolbar, Avatar, ListItem, Card } from 'react-native-material-ui'
import { accentColor, backgroundColor, lightColor, lightGreyColor } from '../../constants/Colors'
import DocumentIcon from '../documents/HomeDocumentsScreen'
import Subheader from 'react-native-material-ui/src/Subheader'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  spaceImg: {
    backgroundColor: backgroundColor,
    height: 40,
    width: 40,
    borderRadius: 20,
  },
})

const listItem = StyleSheet.create({
  primaryText: {
    color: accentColor,
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondaryText: {
    color: lightGreyColor,
    fontSize: 14,
    fontStyle: 'italic'
  }
})

class HomeReservationScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      spaces: require('./dummyData/dummyList')
    }
  }

  _onPress = async () => {
    this.props.navigation.navigate('ReservationShowSpaceScreen')
  }

  render () {
    return (
      <View style={styles.container}>
        <Toolbar
          leftElement="menu"
          onLeftElementPress={() => this.props.navigation.toggleDrawer()}
          centerElement={'Reservas'}
          rightElement="add"
          onRightElementPress={() => this.props.navigation.navigate('ReservationCreateSpace')}
        />
        <ScrollView style={{flex: 1}}>
          <Card>
            <ListItem
              style={listItem}
              centerElement={{
                primaryText: 'Lista de espaços',
                secondaryText: 'Selecione um espaço para ver ou fazer reservas'
              }}
            />
          </Card>
          <FlatList
            data={this.state.spaces}
            renderItem={({item}) => <Card><ListItem
              style={listItem}
              leftElement={<Image source={{uri: item.imageUrl}} style={styles.spaceImg}/>}
              centerElement={{
                primaryText: item.name
              }}
              onPress={this._onPress}
            /></Card>}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </View>
    )
  }
}

export default HomeReservationScreen