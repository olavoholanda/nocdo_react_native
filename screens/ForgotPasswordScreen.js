import React from 'react'
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Text, ScrollView
} from 'react-native'

import { Button, Toolbar } from 'react-native-material-ui'
import { TextField } from 'react-native-material-textfield'
import { mainColor, backgroundColor, accentColor } from '../constants/Colors'

export default class ForgotPasswordScreen extends React.Component {
  state = {
    email: ''
  }

  sendNewPassword = async () => {
    const {email} = this.state
    console.log('sending new password ', email)
  }

  render () {
    let {email} = this.state
    return (
      <View style={styles.container}>
        <Toolbar leftElement="arrow-back" centerElement={'Esqueci a senha'}
                 onLeftElementPress={() => this.props.navigation.navigate('Main')}/>
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
          <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.loginContainer}>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.forgotPassword}>Digite o seu Email de cadastro e nós enviaremos um email
                  com instruções de como criar uma nova senha.</Text>
              </View>
              <View style={styles.fixedPadding}>
                <TextField tintColor={mainColor} label={'Email'} value={email}
                           onChangeText={email => this.setState({email})}/>
              </View>
              <View style={styles.fixedPadding}>
                <Button raised accent text='Criar Nova Senha'
                        onPress={this.sendNewPassword}/>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  loginContainer: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: 40,
    paddingRight: 40,
  },
  fixedPadding: {
    paddingTop: 15,
  },
  forgotPassword: {
    color: accentColor,
    textAlign: 'center',
  },
})
