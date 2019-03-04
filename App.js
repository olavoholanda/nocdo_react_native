import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';

import {ThemeContext, getTheme, Toolbar} from 'react-native-material-ui';
import { mainColor, accentColor, textColor, darkTextColor, greyTextColor } from './constants/Colors'

const statusBarHeight = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight

// you can set your style right here, it'll be propagated to application
const uiTheme = {
  palette: {
    primaryColor: mainColor,
    accentColor: accentColor,
    primaryTextColor: textColor,
    secondaryTextColor: darkTextColor,
    alternateTextColor: textColor,
  },
  toolbar: {
    container: {
      paddingTop: statusBarHeight,
      height: 80,
    },
  },
};

export default class Main extends Component {
  render() {
    return (
        <ThemeContext.Provider value={getTheme(uiTheme)}>
          <App />
        </ThemeContext.Provider>
    );
  }
}

class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          <AppNavigator />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/logo/white.png'),
        require('./assets/images/logo/dark.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'Roboto': require('./assets/fonts/Roboto-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
