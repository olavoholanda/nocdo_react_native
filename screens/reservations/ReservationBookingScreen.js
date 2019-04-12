import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { accentColor, backgroundColor, darkTextColor, lightGreyColor, mainColor } from '../../constants/Colors'
import { Button, Card, Icon, ListItem, Toolbar } from 'react-native-material-ui'
import { Calendar } from 'react-native-calendars'
import moment from 'moment'
import {weekdaysInMonth} from '../../components/utils/weekdays'

const UNAVAILABLE_DAY = {disabled: true, disableTouchEvent: true}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  scroll: {
    flex: 1,
  },
  spaceImg: {
    height: 100,
  },
  caption: {
    fontWeight: 'bold',
    color: darkTextColor
  }
})

const listItem = StyleSheet.create({
  primaryText: {
    color: mainColor,
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondaryText: {
    color: accentColor,
    fontSize: 14,
  },
  tertiaryText: {
    color: lightGreyColor,
    fontSize: 12,
    fontStyle: 'italic'
  }
})

function getDatesFromMonthDay (weekdays, startDate) {
  const now = moment()
  let datesArray = weekdaysInMonth(moment(startDate), weekdays)
  datesArray = datesArray.filter(d => now.isBefore(d))

  return datesArray.reduce((acc, current) => {
    acc[current.format('YYYY-MM-DD')] = UNAVAILABLE_DAY
    return acc
  }, {})
}

class ReservationBookingScreen extends React.Component {

  constructor (props) {
    super(props)

    const now = moment()
    this.state = {
      space: {
        id: '710fbd29-ec23-4c51-a311-cc87e453df94',
        name: 'Salão de Festas',
        imageUrl: 'https://br.habcdn.com/photos/project/medium/predio-vila-olimpia-sp-salao-de-festas_567663.jpg',
        unavailableDays: ['monday, tuesday'],
        more: 'Espaço disponível das 10:00 às 23:00. Segunda e Terça sempre fechado.'
      },
      markedDates: this._loadMarkedDates(now.toISOString()),
      selectedDate: ''
    }
  }

  _loadMarkedDates = (startDate) => {
    const unavailableWeekDays = ['monday', 'tuesday']
    let markedDates = getDatesFromMonthDay(unavailableWeekDays, startDate)

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
    const {space} = this.state

    return (
      <View style={styles.container}>
        <Toolbar
          leftElement="arrow-back"
          onLeftElementPress={() => this.props.navigation.navigate('InnerHome')}
          centerElement={'Reservas'}
        />
        <ScrollView style={styles.scroll}>
          <Card>
            <Image source={{uri: space.imageUrl}} resizeMode='cover' style={styles.spaceImg}/>
            <ListItem
              style={listItem}
              numberOfLines={'dynamic'}
              centerElement={{
                primaryText: space.name,
                secondaryText: 'Fechado: Segunda, Terça',
                tertiaryText: space.more
              }}
            />
          </Card>
          <Card>
            <Calendar
              minDate={new Date()}
              onDayPress={(day) => this.setState({selectedDate: day.dateString})}
              markedDates={{ ...this.state.markedDates, [this.state.selectedDate]: { selected: true, disableTouchEvent: true, selectedColor: 'blue'} }}
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

export default ReservationBookingScreen