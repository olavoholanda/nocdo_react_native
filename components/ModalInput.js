import React from 'react'
import { KeyboardAvoidingView, Modal, StyleSheet, TouchableOpacity, View } from 'react-native'
import { backgroundColor, mainColor, modalColor } from '../constants/Colors'
import { TextField } from 'react-native-material-textfield'
import { Button } from 'react-native-material-ui'
import PropTypes from 'prop-types'

const buttonStyle = StyleSheet.create({
  container: {
    borderRadius: 0,
    height: 60,
    backgroundColor: mainColor
  },
})

class ModalInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      modalVisible: this.props.modalVisible,
      value: ''
    }
  }

  componentDidUpdate (prevProps) {
    if (this.props.modalVisible !== prevProps.modalVisible) {
      this.setState({modalVisible: this.props.modalVisible})
      setTimeout(() => {
        this._textInput.focus()
      }, 700)
    }
  }

  _closeModal = async () => {
    this.setState({modalVisible: false})
  }

  _confirmNewOption = async () => {
    const {value} = this.state
    this.setState({
      value: '',
      modalVisible: false
    })

    this.props.onConfirm(value)
  }

  render () {
    const {inputLabel, buttonLabel, value} = this.props

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          console.log('closing modal')
        }}>
        <View style={{flex: 1}}>
          <View style={{flex: 4, backgroundColor: modalColor}}>
            <TouchableOpacity style={{flex: 1}} onPress={this._closeModal}/>
          </View>
          <View style={{flex: 3, backgroundColor: backgroundColor}}>
            <KeyboardAvoidingView behavior='padding' enabled>
              <TextField
                ref={component => this._textInput = component}
                tintColor={mainColor}
                label={inputLabel}
                value={value}
                returnKeyType={'done'}
                multiline={true}
                containerStyle={{margin: 10}}
                onChangeText={value => this.setState({value})}/>
              <Button raised primary text={buttonLabel} style={buttonStyle} onPress={this._confirmNewOption}/>
            </KeyboardAvoidingView>
          </View>
        </View>
      </Modal>
    )
  }
}

ModalInput.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  inputLabel: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired
}

export default ModalInput