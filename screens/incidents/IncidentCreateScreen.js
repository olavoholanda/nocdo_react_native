import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, Checkbox, Toolbar } from 'react-native-material-ui'
import { backgroundColor, mainColor } from '../../constants/Colors'
import { TextField } from 'react-native-material-textfield'
import ModalDialog from '../../components/ModalDialog'

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
      incident: 'Digite aqui o que aconteceu...',
      privacy: false,
      modalVisible: false,
    }
  }

  _submitIncident = async () => {
    console.log('sending incident', this.state.incident)
    this.setState({modalVisible: true})
  }

  _sendIncident = async (action) => {
    this.setState({modalVisible: false})
    if (action) {
      console.log('confirmed action, now we will send the data')
    }
  }

  render () {
    let {incident, privacy, modalVisible} = this.state
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
            label='Ocorrência'
            value={incident}
            multiline
            onChangeText={incident => this.setState({incident})}
          />
          <Checkbox label="I Agree" value="privacy" checked={privacy} onCheck={privacy => this.setState({privacy})}/>
          <Button raised primary text='Criar' onPress={this._submitIncident}/>
        </ScrollView>
        <ModalDialog modalVisible={modalVisible} title='Confirmar' subtitle='Enviar nova ocorrência?'
                     onClose={this._sendIncident}/>
      </View>
    )
  }
}

export default IncidentCreateScreen