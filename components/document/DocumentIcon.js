import React from 'react'
import { Icon } from 'react-native-material-ui'

//icons list
// "file-pdf-o": 61889,
// "file-word-o": 61890,
// "file-excel-o": 61891,
// "file-powerpoint-o": 61892,
// "file-photo-o": 61893,
// "file-picture-o": 61893,
// "file-image-o": 61893,
// "file-zip-o": 61894,
// "file-archive-o": 61894,
// "file-sound-o": 61895,
// "file-audio-o": 61895,
// "file-movie-o": 61896,
// "file-video-o": 61896,
// "file-code-o": 61897,

const types = {
  doc: {
    name: 'file-word-o',
    color: 'blue'
  },
  docx: {
    name: 'file-word-o',
    color: 'blue'
  },
  pdf: {
    name: 'file-pdf-o',
    color: 'red'
  },
  xls: {
    name: 'file-excel-o',
    color: 'green'
  },
  xlsx: {
    name: 'file-excel-o',
    color: 'green'
  },
  jpg: {
    name: 'file-image-o',
    color: 'purple'
  },
  png: {
    name: 'file-image-o',
    color: 'purple'
  },
  gif: {
    name: 'file-image-o',
    color: 'purple'
  },
  bmp: {
    name: 'file-image-o',
    color: 'purple'
  },
  tff: {
    name: 'file-image-o',
    color: 'purple'
  }
}

class DocumentIcon extends React.Component {
  constructor (props) {
    super(props)
    const icon = types[this.props.type.toLowerCase()]
    this.state = {
      name: icon.name,
      color: icon.color
    }
  }

  render () {
    return <Icon name={this.state.name} color={this.state.color} iconSet='FontAwesome' />
  }
}

export default DocumentIcon