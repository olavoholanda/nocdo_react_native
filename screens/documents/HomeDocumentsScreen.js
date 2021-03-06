import React from 'react'
import { FlatList, Linking, ScrollView, StyleSheet, View } from 'react-native'
import { ListItem, Toolbar } from 'react-native-material-ui'
import { accentColor, backgroundColor, lightGreyColor } from '../../constants/Colors'
import DocumentIcon from '../../components/document/DocumentIcon'
import DocumentMenu from '../../components/document/DocumentMenu'
import Button from 'react-native-material-ui/src/Button'
import { DocumentPicker } from 'expo'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  headerImg: {
    backgroundColor: backgroundColor,
    height: 40,
    width: 40,
    borderRadius: 20,
  },
})

const listItem = StyleSheet.create({
  primaryText: {
    color: accentColor,
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondaryText: {
    color: lightGreyColor,
    fontSize: 14,
    fontStyle: 'italic'
  }
})

class HomeDocumentsScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      documents: require('./dummyData/dummyList.json'),
      modalVisible: false,
      selectedDocument: {}
    }
  }

  _openDocumentMenu = async (document) => {
    this.setState({
      modalVisible: true,
      selectedDocument: document
    })
  }

  _onCloseModal = async () => {
    this.setState({
      modalVisible: false,
      selectedDocument: {}
    })
  }

  _pickDocument = async () => {
    const newDocument = await DocumentPicker.getDocumentAsync({type: '*/*', copyToCacheDirectory: true})
    if (newDocument.type === 'success') {
      console.log('upload document ', newDocument.name)
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Toolbar
          leftElement="menu"
          onLeftElementPress={() => this.props.navigation.toggleDrawer()}
          centerElement={'Documentos'}
          rightElement="add"
          onRightElementPress={this._pickDocument}
        />
        <ScrollView style={{flex: 1, padding: 15}}>
          <FlatList
            data={this.state.documents}
            renderItem={({item}) => <ListItem
              divider
              style={listItem}
              leftElement={<DocumentIcon type={item.type}/>}
              centerElement={{
                primaryText: item.title,
                secondaryText: new Date(item.date).toLocaleDateString(),
              }}
              onPress={() => Linking.openURL(item.url)}
              rightElement={<Button icon='more-vert' text='' accent onPress={() => this._openDocumentMenu(item)}/>}
            />}
            keyExtractor={item => item.id}
          />
        </ScrollView>
        <DocumentMenu modalVisible={this.state.modalVisible} document={this.state.selectedDocument}
                      onClose={this._onCloseModal}/>
      </View>
    )
  }
}

export default HomeDocumentsScreen