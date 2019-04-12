import React from 'react'
import { FlatList, Image, ScrollView, StyleSheet, View } from 'react-native'
import { Card, ListItem, Toolbar } from 'react-native-material-ui'
import { accentColor, backgroundColor, lightGreyColor, mainColor } from '../../constants/Colors'
import { closedDays } from '../../components/utils/utils'

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
    color: mainColor,
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondaryText: {
    color: accentColor,
    fontSize: 14,
  },
  tertiaryText: {
    color: lightGreyColor,
    fontSize: 12,
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

  _onPress = async (spaceId) => {
    this.props.navigation.navigate('ReservationShowSpace', {spaceId: spaceId})
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
                primaryText: item.name,
                secondaryText: closedDays(item.unavailableDays),
                tertiaryText: item.more
              }}
              onPress={() => this._onPress(item.id)}
            /></Card>}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </View>
    )
  }
}

export default HomeReservationScreen