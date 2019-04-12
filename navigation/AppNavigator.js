import React from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import InnerDrawerNavigator from './InnerDrawerNavigator'

import SignInScreen from '../screens/SignInScreen'
import RegisterScreen from '../screens/RegisterScreen'
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen'

//POLLS
import PollCreateScreen from '../screens/polls/PollCreateScreen'
import ShowPollScreen from '../screens/polls/ShowPollScreen'
import PollResultScreen from '../screens/polls/PollResultScreen'

//INCIDENTS
import IncidentCreateScreen from '../screens/incidents/IncidentCreateScreen'

//NOTICES
import NoticeCreateScreen from '../screens/notices/NoticeCreateScreen'

//RESERVATION
import ReservationShowSpaceScreen from '../screens/reservations/ReservationShowSpaceScreen'

export default createAppContainer(createSwitchNavigator({
    // Main: SignInScreen,
    Main: ReservationShowSpaceScreen,
    ForgotPassword: ForgotPasswordScreen,
    RegisterScreen: RegisterScreen,
    InnerHome: InnerDrawerNavigator,
    PollShow: ShowPollScreen,
    PollResult: PollResultScreen,
    PollCreate: PollCreateScreen,
    IncidentCreate: IncidentCreateScreen,
    NoticeCreate: NoticeCreateScreen,
    ReservationShowSpace: ReservationShowSpaceScreen,
}))