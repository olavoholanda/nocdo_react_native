import React from 'react'
import { Text, Image, SafeAreaView, ScrollView, StyleSheet, View, Dimensions, Platform, StatusBar } from 'react-native'
import { createAppContainer, createDrawerNavigator, DrawerItems } from 'react-navigation'
import { Button, Icon } from 'react-native-material-ui'
import { lightColor, backgroundColor, textColor, mainColor, } from '../constants/Colors'
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  header: {
    flexDirection: 'row',
    paddingTop: statusBarHeight,
    height: 130 + statusBarHeight,
    backgroundColor: mainColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImg: {
    backgroundColor: backgroundColor,
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  name: {
    color: textColor,
    fontWeight: 'bold',
  }
})

//Safe Area View will handle status bar of iphone X
//DrawerItems will be the navigation items
const CustomDrawerComponent = (props) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <Image source={{uri: 'https://randomuser.me/api/portraits/men/79.jpg'}} style={styles.headerImg}/>
      <View style={{marginLeft: 10}}>
        <Text style={styles.name}>Alexandre Moura</Text>
        <Text style={styles.name}>a.moura@gmail.com</Text>
      </View>
    </View>
    <View style={{alignItems: 'center', justifyContent: 'center', backgroundColor: lightColor, height: 50}}>
      <Text style={styles.name}>Jardim do Horto 1</Text>
    </View>
    <ScrollView>
      <DrawerItems
        {...props}
        activeBackgroundColor={backgroundColor}
        activeTintColor={mainColor}
        inactiveBackgroundColor={backgroundColor}
      />
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
    Incidents: {
      screen: Incidents,
      navigationOptions: {
        title: 'Ocorrências',
        drawerIcon: ({tintColor}) => (<Icon color={tintColor} name="feedback"/>)
      }
    },
    Notice: {
      screen: Notices,
      navigationOptions: {
        title: 'Avisos',
        drawerIcon: ({tintColor}) => (<Icon color={tintColor} name="message"/>)
      }
    },
    Home: {
      screen: Feed,
      navigationOptions: {
        drawerLabel: 'Início',
        drawerIcon: ({tintColor}) => (<Icon color={tintColor} name="home"/>)
      }
    },
    Lobby: {
      screen: Lobby,
      navigationOptions: {
        title: 'Portaria',
        drawerIcon: ({tintColor}) => (<Icon color={tintColor} name="people"/>)
      }
    },
    Employees: {
      screen: Employees,
      navigationOptions: {
        title: 'Colaboradores',
        drawerIcon: ({tintColor}) => (<Icon color={tintColor} name="perm-contact-calendar"/>)
      }
    },
    Reservations: {
      screen: Reservations,
      navigationOptions: {
        title: 'Reservas',
        drawerIcon: ({tintColor}) => (<Icon color={tintColor} name="event"/>)
      }
    },
    Polls: {
      screen: Polls,
      navigationOptions: {
        drawerLabel: 'Enquetes',
        drawerIcon: ({tintColor}) => (<Icon color={tintColor} name="poll"/>)
      }
    },
    Documents: {
      screen: Documents,
      navigationOptions: {
        title: 'Documentos',
        drawerIcon: ({tintColor}) => (<Icon color={tintColor} name="insert-drive-file"/>)
      }
    },

  },
  DrawerConfig
)

export default createAppContainer(AppDrawerNavigator)