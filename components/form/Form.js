import { View,TextInput,Text,TouchableOpacity} from 'react-native'
import React from 'react'
import styles from './StyleForm'

const Form = () => {
  return (
    <View style={styles.Form}>
      <TextInput placeholder="Enter Task" style={styles.Input}></TextInput>
      <TouchableOpacity>
        <View style={styles.iconBorder}>
          <Text style={styles.icon}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Form