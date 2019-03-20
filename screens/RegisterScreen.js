import React from 'react'
import {
  View,
  StyleSheet,
  Text, KeyboardAvoidingView, ScrollView
} from 'react-native'

import { Button, Toolbar } from 'react-native-material-ui'
import { TextField } from 'react-native-material-textfield'
import { mainColor } from '../constants/Colors'

export default class RegisterScreen extends React.Component {
  state = {
    name: '', email: '', password: '', passwordConfirmation: '', phone: ''
  }

  signUp = async () => {
    const {name, email, password, passwordConfirmation, phone} = this.state
    try {
      console.log('user successfully signed up!: ', name)
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }

  render () {
    let {name, email, password, passwordConfirmation, phone} = this.state

    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
        <ScrollView>
          <Toolbar leftElement="arrow-back" centerElement={'Criar nova conta'}
                   onLeftElementPress={() => this.props.navigation.navigate('Main')}/>
          <View style={styles.registerContainer}>
            <TextField
              tintColor={mainColor}
              label={'Nome'}
              value={name}
              returnKeyType='next'
              onChangeText={name => this.setState({name})}/>
            <TextField
              tintColor={mainColor}
              label={'Telefone'}
              value={phone}
              onChangeText={phone => this.setState({phone})}/>
            <TextField
              tintColor={mainColor}
              label={'Email'}
              value={email}
              autoCapitalize="none"
              onChangeText={email => this.setState({email})}/>
            <TextField
              tintColor={mainColor}
              label={'Senha'}
              value={password}
              secureTextEntry={true}
              autoCapitalize="none"
              onChangeText={password => this.setState({password})}/>
            <TextField
              tintColor={mainColor}
              label={'Confirmar senha'}
              value={passwordConfirmation}
              secureTextEntry={true}
              autoCapitalize="none"
              onChangeText={passwordConfirmation => this.setState({passwordConfirmation})}/>

            <Button raised primary text='Registrar' onPress={this.signUp} style={styles.registerButton}>
              <Text>Registrar</Text>
            </Button>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  registerContainer: {
    paddingTop: 15,
    paddingLeft: 40,
    paddingRight: 40,
  },
  registerButton: {
    paddingTop: 15,
  }

})