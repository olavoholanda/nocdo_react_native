import React from 'react'
import { FlatList, KeyboardAvoidingView, Modal, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Button, ListItem, Toolbar } from 'react-native-material-ui'
import { TextField } from 'react-native-material-textfield'
import { backgroundColor, darkTextColor, mainColor, modalColor } from '../../constants/Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  header: {
    flex: 1,
    padding: 40,
  },
  buttonContainer: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const buttonStyle = StyleSheet.create({
  container: {
    borderRadius: 0,
    height: 60,
    backgroundColor: mainColor
  },
})

class ShowPollScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      modalVisible: false,
      title: '',
      currentOption: '',
      options: ['Sim', 'Não']
    }
  }

  _closeOptionModal = async () => {
    this.setState({modalVisible: false})
  }

  _newOptionModal = async () => {
    this.setState({modalVisible: true})
    setTimeout(() => {
      this._textInput.focus()
    }, 1000)
  }

  _confirmNewOption = async () => {
    const {options, currentOption} = this.state
    options.push(currentOption)
    this.setState({
      currentOption: '',
      options: options,
      modalVisible: false
    })
  }

  _removeOption (option) {
    const filteredOptions = this.state.options.filter(op => op !== option)
    this.setState({options: filteredOptions})
  }

  _renderSubmitButton () {
    const {options, title} = this.state
    return options.length < 2 || title === '' ? null : (
      <Button
        raised
        primary
        style={buttonStyle}
        text="Enviar"
        onPress={() => this.props.navigation.navigate('InnerHome')}
      />
    )
  }

  render () {
    const {title, currentOption} = this.state
    return (
      <View style={styles.container}>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={() => this.props.navigation.navigate('InnerHome')}
          centerElement={'Nova enquete'}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            console.log('closing modal')
          }}>
          <View style={{flex: 1}}>
            <View style={{flex: 4, backgroundColor: modalColor}}>
              <TouchableOpacity style={{flex: 1}} onPress={this._closeOptionModal}/>
            </View>
            <View style={{flex: 3, backgroundColor: backgroundColor}}>
              <KeyboardAvoidingView behavior='padding' enabled>
                <TextField
                  ref={component => this._textInput = component}
                  tintColor={mainColor}
                  label={'Opção'}
                  value={currentOption}
                  returnKeyType={'done'}
                  multiline={true}
                  containerStyle={{margin: 10}}
                  onChangeText={currentOption => this.setState({currentOption})}/>
                <Button raised primary text='CONFIRMAR' style={buttonStyle} onPress={this._confirmNewOption}/>
              </KeyboardAvoidingView>
            </View>
          </View>
        </Modal>
        <ScrollView>
          <View style={styles.header}>
            <TextField
              tintColor={mainColor}
              label={'O que você deseja saber?'}
              value={title}
              returnKeyType={'done'}
              multiline={true}
              fontSize={22}
              onChangeText={title => this.setState({title})}/>
          </View>
          <FlatList
            extraData={this.state}
            data={this.state.options}
            renderItem={({item}) => <ListItem
              numberOfLines='dynamic'
              style={{
                container: {
                  margin: 10,
                  backgroundColor: 'white',
                },
                primaryText: {
                  color: darkTextColor,
                },
              }}
              centerElement={{
                primaryText: item,
              }}
              rightElement={<Button default icon='cancel' text='' onPress={() => this._removeOption(item)}/>}
            />}
            keyExtractor={(item, index) => index.toString()}
          />
          <View style={styles.buttonContainer}>
            <Button default text='Adicionar' icon='add' onPress={this._newOptionModal}/>
          </View>
        </ScrollView>
        {this._renderSubmitButton()}
      </View>
    )
  }
}

export default ShowPollScreen