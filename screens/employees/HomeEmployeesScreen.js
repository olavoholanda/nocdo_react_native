import React from 'react'
import { Dimensions, FlatList, ScrollView, StyleSheet, View } from 'react-native'
import { Toolbar } from 'react-native-material-ui'
import { accentColor, backgroundColor, mainColor } from '../../constants/Colors'
import EmployeeCard from '../../components/employee/EmployeeCard'
import { SceneMap, TabBar, TabView } from 'react-native-tab-view'

const InternalRoute = () => (
  <ListOfInternals/>
)
const ExternalRoute = () => (
  <ListOfExternals/>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
})

const toolbarStyle = StyleSheet.create({
  container: {
    elevation: 0,
  },
})

class ListOfExternals extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      workers: require('./dummyData/dummyExternalList')
    }
  }

  render () {
    return (
      <ScrollView style={{flex: 1, padding: 15}}>
        <FlatList
          data={this.state.workers}
          renderItem={({item}) => <EmployeeCard employee={item}/>}
          keyExtractor={item => item.id}
        />
        <View style={{height: 20}}/>
      </ScrollView>
    )
  }
}

class ListOfInternals extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      workers: require('./dummyData/dummyCondoList')
    }
  }

  render () {
    return (
      <ScrollView style={{flex: 1, padding: 15}}>
        <FlatList
          data={this.state.workers}
          renderItem={({item}) => <EmployeeCard employee={item}/>}
          keyExtractor={item => item.id}
        />
        <View style={{height: 20}}/>
      </ScrollView>
    )
  }
}

class HomeEmployeesScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      index: 0,
      routes: [
        {key: 'internal', title: 'Condomínio'},
        {key: 'external', title: 'Externo'},
      ],
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Toolbar
          leftElement="menu"
          onLeftElementPress={() => this.props.navigation.toggleDrawer()}
          centerElement={'Colaboradores'}
          style={toolbarStyle}
        />
        <TabView
          navigationState={this.state}
          renderScene={SceneMap({
            internal: InternalRoute,
            external: ExternalRoute,
          })}
          renderTabBar={props =>
            <TabBar
              {...props}
              indicatorStyle={{backgroundColor: accentColor}}
              style={{backgroundColor: mainColor}}
            />
          }
          onIndexChange={index => this.setState({index})}
          initialLayout={{width: Dimensions.get('window').width}}
        />
      </View>
    )
  }
}

export default HomeEmployeesScreen