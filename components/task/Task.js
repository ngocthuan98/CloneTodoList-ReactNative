import { View, Text,  } from 'react-native'
import React from 'react'

import styles from './Style'
const Task = () => {
  return (
    <View style={styles.item}>
      <View style={styles.square}>
        <Text style={styles.number}>01</Text>
      </View>
      <Text style={styles.content}>Task</Text>
    </View>
  )
}

export default Task