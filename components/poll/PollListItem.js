import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Icon } from 'react-native-material-ui'
import { accentColor, backgroundColor, lightGreyColor, mainColor } from '../../constants/Colors'

const listItem = StyleSheet.create({
  container: {
    backgroundColor: backgroundColor,
  },
})

class LeftIcon extends React.Component {
  render () {
    const {status, votes} = this.props
    const iconColor = status === 'open' ? mainColor : accentColor
    const icon = status === 'open' ? 'view-list' : 'poll'

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Icon style={{fontSize: 36, color: iconColor}} name={icon}/>
        <Text style={{fontSize: 16, color: accentColor}}>{votes}</Text>
        <Text style={{fontSize: 16, color: accentColor}}>Votos</Text>
      </View>
    )
  }
}

class CenterText extends React.Component {
  render () {
    const {title, author, status, endDate} = this.props
    const parsedEndDate = new Date(endDate).toLocaleDateString()
    const endStatus = status === 'open' ? 'Finaliza' : 'Finalizado'

    return (
      <View style={{flex: 1, justifyContent: 'space-between', paddingLeft: 10}}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: accentColor}}>{title}</Text>
        <Text style={{fontSize: 14, color: lightGreyColor}}>{author}  |  {endStatus} em: {parsedEndDate}</Text>
      </View>
    )
  }
}

class PollListItem extends React.Component {
  render () {
    const item = this.props.item

    return (
      <ListItem
        {...this.props}
        divider
        numberOfLines='dynamic'
        leftElement={<LeftIcon status={item.status} votes={item.numberOfVotes}/>}
        style={listItem}
        centerElement={<CenterText status={item.status} author={item.author.name} endDate={item.endDate} title={item.title}/>}
      />
    )
  }
}

PollListItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default PollListItem