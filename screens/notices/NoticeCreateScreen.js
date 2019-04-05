import React from 'react'
import {Text, View} from 'react-native'

class NoticeCreateScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>
          If you like React, you'll also like React Native.
        </Text>
        <Text>
          Instead of 'div' and 'span', you'll use native components
          like 'View' and 'Text'.
        </Text>
      </View>
    )
  }
}

export default NoticeCreateScreen;