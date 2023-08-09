import { View, Text,TouchableOpacity  } from 'react-native'
import React from 'react'

import styles from './style'
const Task = (props) => {
  const {number}= props
  const numberTask= number < 10 ? `0${number}` : number;
  const bgNumber= number % 2 === 0 ? styles.even : styles.odd

  return (
    <TouchableOpacity onLongPress={props.onDeleteTask}>
      <View style={styles.item }>
      <View style={[styles.square,bgNumber]}>
        <Text style={styles.number}>{numberTask}</Text>
      </View>
      <Text style={styles.content}>{props.task}</Text>
    </View>
  </TouchableOpacity>
  )
}

export default Task