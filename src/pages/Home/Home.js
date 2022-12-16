import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  StatusBar
} from 'react-native'
import Task from 'components/Task'


const Home = ({ navigation }) => {
  const [task, setTask] = useState('')
  const [taskItems, setTaskItems] = useState([])
  const [name,setName] = useState("")

  const handleAddTask = () => {                                     // Task를 입력했을 때 array에 추가해줌
    if(task !== '') {
      Keyboard.dismiss()
      setTaskItems([...taskItems, task])
      setTask('')
    } 
  }

  const deleteTask = i => {
    let delArray = taskItems.filter((item, index) => index !== i)  // 만약, 매개변수 i값과 일치하는 것이 있으면 걸러냄
    setTaskItems(delArray)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.tasksWrapper}>
        <View style={{flexDirection:'row'}}>
          <Text style={{fontSize:20}}>이름 : </Text>
          <TextInput
            onChangeText={text => setName(text)}
            value={name}
            style={styles.name}
          ></TextInput>
        </View>
        
        <Text style={styles.sectionTitle}>오늘 할일</Text>
        <ScrollView style={styles.item}>
          {taskItems.map((item, i) => {                           // javaScript 코드를 사용하여 task array에 들어가 있는 item 모두 화면에 출력
            return (
              <TouchableOpacity key={i} onPress={() => deleteTask(i)}>
                <Task text={item} />
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
      <KeyboardAvoidingView
        style={styles.writeTaskWrapper}
        behavior={Platform !== 'ios' ? 'padding' : 'height'}      // 작동안됨
      >
        <TextInput                                        
          onChangeText={text => setTask(text)}
          value={task}
          style={styles.input}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>      
          <View style={styles.addWraper}>
            <Text style={styles.addText}>추가</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  )
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Home.defaultProps = {
  navigation: { navigate: () => null },
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED'
  },
  tasksWrapper: {
    paddingTop: 30,
    paddingHorizontal: 20
  },
  name:{
    borderRadius: 30,
    width:100,
    height:30,
    backgroundColor:'white',
    marginBottom:10,
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  item: {
    marginTop: 30,
    overflow: 'hidden'
  },
  writeTaskWrapper: {
    backgroundColor: '#E8EAED',
    flex: 1,
    position: 'absolute',
    bottom: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250
  },
  addWraper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1
  },
  addText: {
    color: '#C0C0C0',
    fontSize: 20,
  }
})

export default Home
