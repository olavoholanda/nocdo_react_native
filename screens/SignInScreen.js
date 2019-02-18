import React from 'react';
import {
    Platform,
    StyleSheet,
    View,
    Text
} from 'react-native';

import {Button} from 'react-native-material-ui';
import {TextField} from 'react-native-material-textfield';
import {mainColor} from '../constants/Colors';

export default class SignInScreen extends React.Component {
    state = {
        email: '',
        password: '',
    };

    render() {
        let {email, password} = this.state
        return (
            <View style={styles.container}>
                <View style={styles.loginContainer}>
                    <TextField tintColor={mainColor} label={'Email'} value={email} onChangeText={ email => this.setState({ email })}/>
                    <TextField tintColor={mainColor} label='Senha' value={password} onChangeText={ password => this.setState({ password })}/>
                    <Button raised primary text='Log In'><Text>Log In</Text></Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    loginContainer: {
        padding: 50,
    }
});
