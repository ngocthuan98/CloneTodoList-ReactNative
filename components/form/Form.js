import { View,TextInput,Text,TouchableOpacity,KeyboardAvoidingView,Keyboard} from 'react-native'
import React,{useState} from 'react'
import styles from './StyleForm'

const Form = (props) => {
  const [task,setTask]= useState('')

  const handleAddTask = ()=>{
    if(task.length === 0){
      alert('Please enter task')
      return
    }
    props.onAddTask(task)
    setTask('')
    Keyboard.dismiss()
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
      <View style={styles.Form}>
        <TextInput 
        value={task}
        placeholder="Enter Task" 
        style={styles.Input}
        onChangeText={(text)=> setTask(text)}
        >

        </TextInput>
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.iconBorder}>
            <Text style={styles.icon}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Form