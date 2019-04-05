import React from 'react'
import { Modal, Text, View } from 'react-native'
import { Dialog, DialogDefaultActions } from 'react-native-material-ui'
import PropTypes from 'prop-types'
import { modalColor } from '../constants/Colors'

class ModalDialog extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      modalVisible: this.props.modalVisible
    }
  }

  componentDidUpdate (prevProps) {
    if (this.props.modalVisible !== prevProps.modalVisible) {
      this.setState({modalVisible: this.props.modalVisible})
    }
  }

  _handleAction = async (action) => {
    let confirm = action === 'Confirmar'
    this.props.onClose(confirm)
  }

  render () {
    let {title, subtitle} = this.props

    return (
      <View style={{flex: 1}}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            console.log('closing modal')
          }}>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: modalColor}}>
            <Dialog>
              <Dialog.Title><Text>{title}</Text></Dialog.Title>
              <Dialog.Content><Text>{subtitle}</Text></Dialog.Content>
              <Dialog.Actions>
                <DialogDefaultActions
                  actions={['Cancelar', 'Confirmar']}
                  onActionPress={action => this._handleAction(action)}
                />
              </Dialog.Actions>
            </Dialog>
          </View>
        </Modal>
      </View>
    )
  }
}

ModalDialog.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default ModalDialog