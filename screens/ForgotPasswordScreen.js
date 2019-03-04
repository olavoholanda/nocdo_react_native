import React from 'react';
import {
    Platform,
    StyleSheet,
    View,
    KeyboardAvoidingView,
    Image,
    Text, StatusBar, ScrollView
} from 'react-native';

import {Button, Toolbar} from 'react-native-material-ui';
import {TextField} from 'react-native-material-textfield';
import {mainColor, backgroundColor, accentColor} from '../constants/Colors';
import key from '../assets/images/icons/key.png'

export default class ForgotPasswordScreen extends React.Component {
    state = {
        email: ''
    };

    render() {
        let {email} = this.state
        return (
            <View style={styles.container}>
                {/*<StatusBar backgroundColor="blue"/>*/}
                <Toolbar leftElement="arrow-back" centerElement={'Esqueci a senha'}
                         onLeftElementPress={() => this.props.navigation.navigate('Main')}/>
                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                    <ScrollView contentContainerStyle={styles.container}>
                        <View style={styles.imageContainer}>
                            <Image source={key} style={styles.keyImage}/>
                        </View>
                        <View style={styles.loginContainer}>
                            <View style={{flex: 1, alignItems: 'center'}}>
                                <Text style={styles.forgotPassword}>Digite o seu Email de cadastro e nós enviaremos um email
                                    com instruções de como criar uma nova senha.</Text>
                            </View>
                            <View style={{flex: 1}}>
                                <TextField tintColor={mainColor} label={'Email'} value={email}
                                           onChangeText={email => this.setState({email})}/>
                            </View>
                            <View style={{flex: 1}}>
                                <Button raised primary text='Criar Nova Senha'/>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColor,
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginContainer: {
        flex: 3,
        paddingLeft: 40,
        paddingRight: 40,
    },
    keyImage: {
        width: 60,
        height: 60,
        resizeMode: 'center',
    },
    forgotPassword: {
        color: accentColor,
        textAlign: 'center',
    },
});
