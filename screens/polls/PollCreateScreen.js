import React from 'react'
import { FlatList, ScrollView, StyleSheet, View } from 'react-native'
import { Button, ListItem, Toolbar } from 'react-native-material-ui'
import { TextField } from 'react-native-material-textfield'
import { backgroundColor, darkTextColor, mainColor } from '../../constants/Colors'
import ModalInput from '../../components/ModalInput'

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

class ShowPollScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      modalVisible: false,
      title: '',
      options: ['Sim', 'Não']
    }
  }

  _newOptionModal = async () => {
    this.setState({modalVisible: true})
  }

  _confirmOption = async (value) => {
    const {options} = this.state
    options.push(value)
    this.setState({
      options: options,
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
    const {title} = this.state
    return (
      <View style={styles.container}>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={() => this.props.navigation.navigate('InnerHome')}
          centerElement={'Nova enquete'}
        />
        <ModalInput modalVisible={this.state.modalVisible} buttonLabel='Confirmar' inputLabel='Opção'
                    onConfirm={this._confirmOption} onClose={() => this.setState({modalVisible: false})}/>
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