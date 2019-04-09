import React from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Rating } from 'react-native-elements'
import PropTypes from 'prop-types'
import { Card } from 'react-native-material-ui'
import { accentColor, lightGreyColor, mainColor } from '../../constants/Colors'
import moment from 'moment'

const styles = StyleSheet.create({
  name: {
    color: accentColor,
    fontWeight: 'bold',
    fontSize: 16
  },
  role: {
    color: lightGreyColor,
    fontStyle: 'italic',
    fontSize: 14
  },
  label: {
    color: lightGreyColor,
    fontSize: 11
  },
  value: {
    color: accentColor,
    fontSize: 11,
    fontWeight: 'bold',
  }
})

class EmployeeCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      employee: this.props.employee
    }
  }

  renderAgeAndAdmission () {
    const {employee} = this.state
    const age = employee.dateOfBirth ?
      moment().diff(moment(employee.dateOfBirth), 'years') :
      null
    const admAge = employee.dateOfAdmission ?
      moment().diff(moment(employee.dateOfAdmission), 'years') :
      null

    if (age !== null && admAge !== null) {
      return (
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.label}>Idade: </Text>
            <Text style={styles.value}>{age} Anos</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.label}>Tempo: </Text>
            <Text style={styles.value}>{admAge} Anos</Text>
          </View>
        </View>
      )
    }
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{
          backgroundColor: accentColor,
          color: 'white',
          fontWeight: 'bold',
          borderRadius: 2,
          padding: 5
        }}>EXTERNO</Text>
      </View>
    )
  }

  render () {
    const {employee} = this.state
    return (
      <View style={{flex: 1, width: '100%'}}>
        <Card onPress={this.props.onPress}>
            <View style={{flex: 1, flexDirection: 'row', height: 150}}>
              <View style={{flex: 1, margin: 10, justifyContent: 'space-between'}}>
                <View>
                  <Text style={styles.name}>{employee.name}</Text>
                  <Text style={styles.role}>{employee.category}</Text>
                </View>
                {this.renderAgeAndAdmission()}
                <Rating
                  imageSize={18}
                  readonly
                  startingValue={employee.rating}
                />
              </View>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={{uri: employee.profileUrl}} style={{width: 125, height: 125, borderRadius: 5}}/>
              </View>
            </View>
        </Card>
      </View>
    )
  }
}

EmployeeCard.propTypes = {
  employee: PropTypes.object.isRequired,
  onPress: PropTypes.func,
}

export default EmployeeCard