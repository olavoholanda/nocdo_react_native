import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { backgroundColor, mainColor } from '../../constants/Colors'
import { Button, Toolbar } from 'react-native-material-ui'
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

const buttonStyle = StyleSheet.create({
  container: {
    marginTop: 25,
  }
})

class NoticeCreateScreen extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      notice: '',
      modalVisible: false,
    }
  }

  _confirmNotice = async () => {
    console.log('confirming notice', this.state.notice)
    this.setState({modalVisible: true})
  }

  _submitNotice = async (action) => {
    this.setState({modalVisible: false})
    if (action) {
      console.log('confirmed action, now we will send the data')
    }
  }

  render () {
    let {title, notice, modalVisible} = this.state
    return (
      <View style={styles.container}>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={() => this.props.navigation.navigate('InnerHome')}
          centerElement={'Novo Aviso'}
        />
        <ScrollView style={styles.scroll}>
          <TextField
            tintColor={mainColor}
            label='Título'
            value={title}
            onChangeText={title => this.setState({title})}
          />
          <TextField
            tintColor={mainColor}
            label='Aviso'
            value={notice}
            multiline
            onChangeText={notice => this.setState({notice})}
          />
          <Button raised primary text='Criar' style={buttonStyle} onPress={this._confirmNotice}/>
        </ScrollView>
        <ModalDialog modalVisible={modalVisible} title='Confirmar' subtitle='Enviar novo aviso?'
                     onClose={this._submitNotice}/>
      </View>
    )
  }
}

export default NoticeCreateScreen