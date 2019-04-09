import React from 'react'
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native'
import { backgroundColor, darkTextColor, modalColor } from '../../constants/Colors'
import PropTypes from 'prop-types'
import { Icon, ListItem } from 'react-native-material-ui'

const listItem = StyleSheet.create({
  primaryText: {
    color: darkTextColor,
    fontWeight: 'bold'
  },
})

class EmployeeMenu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      modalVisible: this.props.modalVisible,
      employee: this.props.employee
    }
  }

  componentDidUpdate (prevProps) {
    if (this.props.modalVisible !== prevProps.modalVisible) {
      this.setState({modalVisible: this.props.modalVisible})
    }
    if (this.props.employee !== prevProps.employee) {
      this.setState({employee: this.props.employee})
    }
  }

  _closeModal = async () => {
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
                leftElement={<Icon name='person' color={darkTextColor}/>}
                centerElement={{
                  primaryText: this.state.employee.name,
                }}
              />
              <ListItem
                style={listItem}
                leftElement={<Icon name='stars' color={darkTextColor}/>}
                centerElement={{
                  primaryText: 'Avaliar',
                }}
              />
              <ListItem
                style={listItem}
                leftElement={<Icon name='edit' color={darkTextColor}/>}
                centerElement={{
                  primaryText: 'Editar',
                }}
              />
              <ListItem
                style={listItem}
                leftElement={<Icon name='delete' color={darkTextColor}/>}
                centerElement={{
                  primaryText: 'Excluir',
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}

EmployeeMenu.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  employee: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default EmployeeMenu