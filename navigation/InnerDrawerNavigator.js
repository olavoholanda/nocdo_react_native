import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, View, Dimensions, Platform, StatusBar } from 'react-native'
import { createAppContainer, createDrawerNavigator, DrawerItems } from 'react-navigation'
import { lightColor, mainColor, accentColor } from '../constants/Colors'
//menu screens
import Feed from '../screens/feed/HomeFeedScreen'
import Poll from '../screens/polls/HomePollScreen'
import Reservation from '../screens/reservations/HomeReservationScreen'

const WIDTH = Dimensions.get('window').width
const statusBarHeight = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <Image source={require('../assets/images/jdh/logo.png')} style={styles.headerImg}/>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

const DrawerConfig = {
  drawerWidth: WIDTH * 0.83,
  contentComponent: CustomDrawerComponent,
}

//menu drawer
const AppDrawerNavigator = createDrawerNavigator(
  {
    Início: {
      screen: Feed
    },
    Enquetes: {
      screen: Poll
    },
    Reservas: {
      screen: Reservation
    },
  },
  DrawerConfig
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightColor,
  },
  header: {
    paddingTop: statusBarHeight,
    height: 150 + statusBarHeight,
    backgroundColor: mainColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImg: {
    backgroundColor: accentColor,
    height: 100,
    width: 100,
    borderRadius: 50,
  },
})

export default createAppContainer(AppDrawerNavigator)