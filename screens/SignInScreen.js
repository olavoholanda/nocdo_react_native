import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native';

import {Button} from 'react-native-material-ui';
import {TextField} from 'react-native-material-textfield';
import {mainColor, backgroundColor, accentColor} from '../constants/Colors';
import logo from '../assets/images/logo/white.png'

export default class SignInScreen extends React.Component {
    state = {
        email: '',
        password: '',
    };

    render() {
        let {email, password} = this.state
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logoImage}/>
                </View>
                <View style={styles.loginContainer}>
                    <View style={{flex: 3}}>
                        <TextField tintColor={mainColor} label={'Email'} value={email}
                                   onChangeText={email => this.setState({email})}/>
                        <TextField secureTextEntry={true} tintColor={mainColor} label='Senha' value={password}
                                   onChangeText={password => this.setState({password})}/>
                    </View>
                    <View style={{flex: 1}}>
                        <Button raised primary text='Entrar'/>
                    </View>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
                    </View>
                    <View style={{flex: 1}}>
                        <Button raised accent text='Criar Conta'/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColor,
    },
    logoContainer: {
        flex: 1,
        backgroundColor: mainColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginContainer: {
        flex: 2,
        padding: 40,
    },
    logoImage: {
        width: 150,
        resizeMode: 'contain',
        marginTop: 10,
    },
    forgotPassword: {
        color: accentColor,
    },
});
