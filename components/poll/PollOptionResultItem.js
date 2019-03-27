import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { accentColor, darkTextColor, lightColor } from '../../constants/Colors'
import { Icon } from 'react-native-material-ui'

const WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10,
    height: 56
  },
  bar: {
    position: 'absolute',
    height: '100%'
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 100,
    paddingLeft: 16,
    paddingRight: 16
  },
  text: {
    lineHeight: 24,
    fontSize: 16,
    color: darkTextColor
  }
})

class PollOptionResultItem extends React.Component {
  render () {
    const {title, percent, selected, winner} = this.props
    const barWidth = (WIDTH - 20) * percent / 100
    return (
      <View style={styles.container}>
        <View style={{
          ...styles.bar,
          width: barWidth,
          backgroundColor: winner ? lightColor : accentColor
        }}/>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{title}</Text>
          {selected ? <Icon color={darkTextColor} name='check'/> : null}
          <Text style={styles.text}>{percent.toFixed(0)}%</Text>
        </View>
      </View>
    )
  }
}

export default PollOptionResultItem