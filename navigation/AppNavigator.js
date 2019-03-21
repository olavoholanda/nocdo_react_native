import React from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import SignInScreen from '../screens/SignInScreen'
import RegisterScreen from '../screens/RegisterScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'
import HomeScreen from '../screens/HomeScreen'

export default createAppContainer(createSwitchNavigator({
    Main: HomeScreen,
    ForgotPassword: ForgotPasswordScreen,
    RegisterScreen: RegisterScreen,
    HomeScreen: HomeScreen,
}))

// export default createAppContainer(createSwitchNavigator({
//   // You could add another route here for authentication.
//   // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//   Main: MainTabNavigator,
// }));