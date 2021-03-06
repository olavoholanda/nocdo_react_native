import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { accentColor, backgroundColor, darkTextColor, mainColor } from '../../constants/Colors'
import { Button, Card, Icon, Toolbar } from 'react-native-material-ui'
import { Calendar } from 'react-native-calendars'
import moment from 'moment'
import { weekdaysInMonth } from '../../components/utils/weekdays'

const UNAVAILABLE_DAY = {disabled: true, disableTouchEvent: true}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  scroll: {
    flex: 1,
    marginTop: 15
  },
  spaceImg: {
    height: 100,
  },
  caption: {
    fontWeight: 'bold',
    color: darkTextColor
  }
})

function getDatesFromMonthDay (weekdays, startDate) {
  const now = moment()
  let datesArray = weekdaysInMonth(moment(startDate), weekdays)

  if(!datesArray) return {}

  datesArray = datesArray.filter(d => now.isBefore(d))

  return datesArray.reduce((acc, current) => {
    acc[current.format('YYYY-MM-DD')] = UNAVAILABLE_DAY
    return acc
  }, {})
}

class ReservationShowSpaceScreen extends React.Component {

  constructor (props) {
    super(props)
    const spaces = require('./dummyData/dummyList.json')

    const {navigation} = this.props
    const spaceId = navigation.getParam('spaceId', 'NO-ID')

    const selectedSpace = spaces.find(s => s.id === spaceId)
    this.state = {poll: selectedSpace, selectedOption: '-1'}

    this.state = {
      space: selectedSpace,
      markedDates: {},
      selectedDate: ''
    }

    this.state.markedDates = this._loadMarkedDates(moment())
  }

  _loadMarkedDates = (startDate) => {
    let markedDates = getDatesFromMonthDay([...this.state.space.unavailableDays], startDate)

    const yourReservation = moment().day('friday').format('YYYY-MM-DD')
    markedDates[yourReservation] = {selected: true, selectedColor: mainColor}

    const otherReservation = moment().day('thursday').add('7', 'd').format('YYYY-MM-DD')
    markedDates[otherReservation] = {selected: true, selectedColor: accentColor}

    return markedDates
  }

  _handleBookButton = () => {
    const {selectedDate, markedDates} = this.state

    if (!selectedDate || selectedDate === '')
      return <Button text='Reservar' disabled={true} raised primary/>

    return Object.keys(markedDates).includes(selectedDate) ?
      <Button text='Visualizar' raised primary onPress={() => console.log('clicando data', selectedDate)}/> :
      <Button text='Reservar' raised primary onPress={() => console.log('clicando data', selectedDate)}/>
  }

  render () {
    return (
      <View style={styles.container}>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={() => this.props.navigation.navigate('InnerHome')}
          centerElement={this.state.space.name}
        />
        <ScrollView style={styles.scroll}>
          <Card>
            <Calendar
              minDate={new Date()}
              onDayPress={(day) => this.setState({selectedDate: day.dateString})}
              markedDates={{
                ...this.state.markedDates,
                [this.state.selectedDate]: {selected: true, disableTouchEvent: true, selectedColor: 'blue'}
              }}
              onMonthChange={(month) => this.setState({markedDates: this._loadMarkedDates(month.dateString)})}
            />
            <View>
              {this._handleBookButton()}
            </View>
          </Card>
          <Card>
            <View style={{padding: 10}}>
              <Text style={styles.caption}>Legenda:</Text>
              <View style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                marginTop: 20
              }}>
                <Icon iconSet='FontAwesome' color={mainColor} name='circle'/>
                <Text style={{color: darkTextColor}}>Minhas Reservas</Text>
                <Icon iconSet='FontAwesome' color={accentColor} name='circle'/>
                <Text style={{color: darkTextColor}}>Demais Reservas</Text>
              </View>
            </View>
          </Card>
        </ScrollView>
      </View>
    )
  }
}

export default ReservationShowSpaceScreen