import React from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import InnerDrawerNavigator from './InnerDrawerNavigator'

import SignInScreen from '../screens/SignInScreen'
import RegisterScreen from '../screens/RegisterScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'

//POLLS
import ShowPollScreen from '../screens/polls/ShowPollScreen'
import PollResultScreen from '../screens/polls/PollResultScreen'

export default createAppContainer(createSwitchNavigator({
    // Main: SignInScreen,
    Main: InnerDrawerNavigator,
    ForgotPassword: ForgotPasswordScreen,
    RegisterScreen: RegisterScreen,
    HomeScreen: InnerDrawerNavigator,
    PollShow: ShowPollScreen,
    PollResult: PollResultScreen,
}))