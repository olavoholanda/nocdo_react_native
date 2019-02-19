import React from 'react'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import SignInScreen from '../screens/SignInScreen'

export default createAppContainer(createSwitchNavigator({
    Main: SignInScreen,
}))

// export default createAppContainer(createSwitchNavigator({
//   // You could add another route here for authentication.
//   // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//   Main: MainTabNavigator,
// }));