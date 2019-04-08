import React from 'react'
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native'
import { backgroundColor, darkTextColor, modalColor } from '../../constants/Colors'
import PropTypes from 'prop-types'
import { Icon, ListItem } from 'react-native-material-ui'
import DocumentIcon from '../../components/document/DocumentIcon'

const listItem = StyleSheet.create({
  primaryText: {
    color: darkTextColor,
    fontWeight: 'bold'
  },
})

class DocumentMenu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      modalVisible: this.props.modalVisible,
      document: this.props.document
    }
  }

  componentDidUpdate (prevProps) {
    if (this.props.modalVisible !== prevProps.modalVisible) {
      this.setState({modalVisible: this.props.modalVisible})
    }
    if (this.props.document !== prevProps.document) {
      this.setState({document: this.props.document})
    }
  }

  _closeModal = async () => {
    this.setState({modalVisible: false})
    this.props.onClose()
  }

  _renameDocument = async () => {
    console.log('renaming document', this.state.document.id)
    this.setState({modalVisible: false})
    this.props.onClose()
  }

  _deleteDocument = async () => {
    console.log('deleting document', this.state.document.id)
    this.setState({modalVisible: false})
    this.props.onClose()
  }

  render () {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => console.log('closing modal')}
      >
        <View style={{flex: 1, height: '100%'}}>
          <View style={{backgroundColor: modalColor, display: 'flex', height: '100%'}}>
            <View style={{flex: 2, backgroundColor: modalColor}}>
              <TouchableOpacity style={{flex: 1}} onPress={this._closeModal}/>
            </View>
            <View style={{backgroundColor: backgroundColor}}>
              <ListItem
                divider
                style={listItem}
                leftElement={<DocumentIcon type={this.state.document.type}/>}
                centerElement={{
                  primaryText: this.state.document.title,
                }}
              />
              <ListItem
                style={listItem}
                leftElement={<Icon name='edit' color={darkTextColor}/>}
                centerElement={{
                  primaryText: 'Renomear',
                }}
                onPress={this._renameDocument}
              />
              <ListItem
                style={listItem}
                leftElement={<Icon name='delete' color={darkTextColor}/>}
                centerElement={{
                  primaryText: 'Excluir',
                }}
                onPress={this._deleteDocument}
              />
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}

DocumentMenu.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  document: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default DocumentMenu