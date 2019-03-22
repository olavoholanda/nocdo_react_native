import React from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import InnerDrawerNavigator from './InnerDrawerNavigator'

import SignInScreen from '../screens/SignInScreen'
import RegisterScreen from '../screens/RegisterScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'
import ShowPollScreen from '../screens/polls/ShowPollScreen'

export default createAppContainer(createSwitchNavigator({
    Main: InnerDrawerNavigator,
    ForgotPassword: ForgotPasswordScreen,
    RegisterScreen: RegisterScreen,
    HomeScreen: InnerDrawerNavigator,
    ShowPoll: ShowPollScreen,
}))

// export default createAppContainer(createSwitchNavigator({
//   // You could add another route here for authentication.
//   // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//   Main: MainTabNavigator,
// }));