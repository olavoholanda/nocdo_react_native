import React from 'react'
import {createAppContainer, createStackNavigator, createSwitchNavigator} from 'react-navigation'

import SignInScreen from '../screens/SignInScreen'
import RegisterScreen from '../screens/RegisterScreen'


const AuthStack = createStackNavigator({Register: RegisterScreen}) 

export default createAppContainer(createSwitchNavigator({
    Main: AuthStack,
}))

// export default createAppContainer(createSwitchNavigator({
//   // You could add another route here for authentication.
//   // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//   Main: MainTabNavigator,
// }));