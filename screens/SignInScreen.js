import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
} from 'react-native'

import { Button, Toolbar } from 'react-native-material-ui'
import { TextField } from 'react-native-material-textfield'
import { mainColor, backgroundColor, accentColor } from '../constants/Colors'

export default class SignInScreen extends React.Component {
  state = {
    email: '',
    password: '',
  }

  render () {
    let {email, password} = this.state
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
        <Toolbar centerElement={'Entrar com sua conta'}/>
        <View style={styles.loginContainer}>
          <View style={styles.fixedPadding}>
            <TextField tintColor={mainColor} label={'Email'} value={email}
                       onChangeText={email => this.setState({email})}/>
            <TextField secureTextEntry={true} tintColor={mainColor} label='Senha' value={password}
                       onChangeText={password => this.setState({password})}/>
          </View>
          <View style={styles.fixedPadding}>
            <Button raised accent text='Entrar'/>
          </View>
          <View style={styles.linkContainer}>
            <Text style={styles.link}
                  onPress={() => this.props.navigation.navigate('ForgotPassword')}
            >Esqueceu a senha?</Text>
            <Text style={styles.link}
                  onPress={() => this.props.navigation.navigate('RegisterScreen')}
            >Cadastrar-se?</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    justifyContent: 'flex-start',
  },
  loginContainer: {
    paddingTop: 15,
    paddingLeft: 40,
    paddingRight: 40,
  },
  fixedPadding: {
    paddingTop: 15,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
  },
  link: {
    color: accentColor,
  },
})
