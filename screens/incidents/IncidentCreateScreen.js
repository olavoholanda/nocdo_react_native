import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { Toolbar, Button } from 'react-native-material-ui'
import { backgroundColor, mainColor } from '../../constants/Colors'
import { TextField } from 'react-native-material-textfield'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  scroll: {
    flex: 1,
    padding: 15,
  }
})

class IncidentCreateScreen extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      incident: ''
    }
  }

  _submitIncident = async () => {
    console.log('sending incident', this.state.incident)
  }

  render() {
    let {incident} = this.state
    return (
      <View style={styles.container}>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={() => this.props.navigation.navigate('InnerHome')}
          centerElement={'Nova Ocorrência'}
        />
        <ScrollView style={styles.scroll}>
          <TextField
            tintColor={mainColor}
            label='Digite o que aconteceu!'
            value={incident}
            multiline
            onChangeText={incident => this.setState({incident})}
          />
          <Button raised primary text='Criar' onPress={this._submitIncident}/>
        </ScrollView>
      </View>
    )
  }
}

export default IncidentCreateScreen;