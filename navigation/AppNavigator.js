import React from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import SignInScreen from '../screens/SignInScreen'
import RegisterScreen from '../screens/RegisterScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'

export default createAppContainer(createSwitchNavigator({
    Main: SignInScreen,
    ForgotPassword: ForgotPasswordScreen,
    RegisterScreen: RegisterScreen,
}))

// export default createAppContainer(createSwitchNavigator({
//   // You could add another route here for authentication.
//   // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//   Main: MainTabNavigator,
// }));