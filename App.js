import {Text, View,ScrollView,ImageBackground,Alert} from 'react-native'
import React, { useState } from 'react'
import Task from './components/task/Task'
import Form from './components/form/Form'
import styles from './AppStyle'

const image = { uri: 'https://images.unsplash.com/photo-1551376347-075b0121a65b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80' };

export default function App() {
  const [taskList,setTaskList]= useState([])

  const handleAddTask = (task)=>{
    setTaskList([...taskList,task])
  }
  const handleDeleteTask = (index)=>{
    Alert.alert(
      'Notification!!!',
      'Are you sure to delete the task?',
      [
        {
          text: 'Ok',
          onPress: () => {
            let taskListTmp= [...taskList]
            taskListTmp.splice(index,1)
            setTaskList(taskListTmp)
          }
        },
        {
          text: 'Cancel',
          onPress: () => {},
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            'This alert was dismissed by tapping outside of the alert dialog.',
          ),
      },
    );
  }

  return (
    <View style={styles.Container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text style={styles.Text}>Todo List</Text>
          <View style={styles.Body}>
            <ScrollView>
                {taskList.map((item,index)=>{
                   return <Task key={index} task={item} number={index+1} 
                   onDeleteTask={()=>{handleDeleteTask(index)}}/>
                })}
            </ScrollView>
            <Form onAddTask={handleAddTask} />
          </View>
      </ImageBackground>
    </View>
  )
}
