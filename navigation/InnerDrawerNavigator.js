import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, View, Dimensions, Platform, StatusBar } from 'react-native'
import { createAppContainer, createDrawerNavigator, DrawerItems } from 'react-navigation'
import { lightColor, backgroundColor, accentColor } from '../constants/Colors'
//menu screens
import Feed from '../screens/feed/HomeFeedScreen'
import Notices from '../screens/notices/HomeNoticesScreen'
import Lobby from '../screens/lobby/HomeLobbyScreen'
import Employees from '../screens/employees/HomeEmployeesScreen'
import Reservations from '../screens/reservations/HomeReservationScreen'
import Polls from '../screens/polls/HomePollScreen'
import Documents from '../screens/documents/HomeDocumentsScreen'
import Incidents from '../screens/incidents/HomeIncidentsScreen'

const WIDTH = Dimensions.get('window').width
const statusBarHeight = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight

//Safe Area View will handle status bar of iphone X
//DrawerItems will be the navigation items
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
  drawerWidth: WIDTH * 0.83, //83% of the cell width
  contentComponent: CustomDrawerComponent,
}

//menu drawer
const AppDrawerNavigator = createDrawerNavigator(
  {
    Enquetes: {
      screen: Polls
    },
    Início: {
      screen: Feed
    },
    Avisos: {
      screen: Notices
    },
    Portaria: {
      screen: Lobby
    },
    Colaboradores: {
      screen: Employees
    },
    Reservas: {
      screen: Reservations
    },
    Documentos: {
      screen: Documents
    },
    Ocorrências: {
      screen: Incidents
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
    backgroundColor: accentColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImg: {
    backgroundColor: backgroundColor,
    height: 100,
    width: 100,
    borderRadius: 50,
  },
})

export default createAppContainer(AppDrawerNavigator)