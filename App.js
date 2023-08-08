import {Text, View,ScrollView,ImageBackground,TouchableOpacity} from 'react-native'
import React from 'react'
import Task from './components/task/Task'
import Form from './components/form/Form'
import styles from './AppStyle'

const image = { uri: 'https://images.unsplash.com/photo-1551376347-075b0121a65b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80' };

export default function App() {
  return (
    <View style={styles.Container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text style={styles.Text}>Todo List</Text>
          <View style={styles.Body}>
            <ScrollView>
              <TouchableOpacity>
                <Task />
              </TouchableOpacity>
            </ScrollView>
            <Form />
          </View>
      </ImageBackground>
    </View>
  )
}
