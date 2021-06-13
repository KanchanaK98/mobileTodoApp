import React,{useState} from 'react';
import { FlatList, StyleSheet,Text, View,TouchableOpacity,ScrollView,SafeAreaView,Alert,Modal } from 'react-native';
import Header from './header';
import { DataTable } from 'react-native-paper';
import AddTodos from './AddTodos';
import { AntDesign } from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';

export default function App() {
  const [todos, settodos] = useState([
    
  ]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setmodalData] = useState('xx');
  //const [placeholders, setplaceholders] = useState("Add Todos...")
  function modalFunction(data)
  {
    setModalVisible(true);
    setmodalData(data.task);
  }

  const pressHandler=(key)=>{
    settodos((prevtodos)=>{
      return prevtodos.filter(todos=>todos.key!=key);
    });
  }

  const submitHandler=(task,date)=>{
    if((task.length>1)&&(date.length>1)){
        settodos((prevtodos)=>{
        return[
        {task:task,key:Math.random().toString(),date:date},
        ...prevtodos,
        
      ]
    });
    //setplaceholders('Add Todos...');
    }else
    {
      Alert.alert('OOPS!','Task and Date fields should be filled.',[
        {text:'Understood',onPress:()=>console.log('alert closed')}
      ]);
    }
    
  }
  return (
    <SafeAreaView style={styles.container}>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
    }}>
    
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <View>
    <MaterialIcons name='close' size={30} onPress={()=>{setModalVisible(false);}}/>
    </View>
      <View style={styles.modal}>
      
        <Text>{modalData}</Text>
        
      </View>
    </View>
    
    </Modal>
    
      {/*header*/}
      <Header/>
      {/*input field*/}
      <View style={styles.content}>
      <View style={styles.bottom}>
        <AddTodos submitHandler={submitHandler}/>
      </View>
      
      
        
         
          
          <ScrollView vertical>
          
            <DataTable>
              <DataTable.Header style={styles.headers}>
                      <DataTable.Title ><Text  style={styles.topic}>Task</Text></DataTable.Title>
                      <DataTable.Title ><Text  style={styles.topic}>Date</Text></DataTable.Title>
                      <DataTable.Title ><Text style={styles.topic}>    </Text></DataTable.Title>
              </DataTable.Header>
            
          
            {todos.map((item)=>{
              return(
                  <View key={item.key}>
                  <View style={styles.list}>
                  <TouchableOpacity style={styles.taskModal} onPress={()=>modalFunction(item)}>
                    <DataTable.Row>
                    
                          
                          {/*<DataTable.Cell style={{backgroundColor:'blue'}} >
                            
                            
                            <View style={{flexDirection:'row'}} >
                              <Text style={styles.task}>
                              {item.task}
                              </Text>
                            </View>
                            
                            
                          </DataTable.Cell>*/}
                          <DataTable.Cell style={styles.date}><Text>{item.task}</Text></DataTable.Cell>
                          <DataTable.Cell style={styles.date}><Text>{item.date}</Text></DataTable.Cell>
                          
                            <TouchableOpacity style={styles.button} onPress={()=>pressHandler(item. key)}>
                            <View style={styles.delete}>
                              <AntDesign name="delete" size={20} color="black" />
                              
                            </View>
                            </TouchableOpacity>
                          
                        
                      
                    
                    </DataTable.Row>
                    </TouchableOpacity>
                  </View>
                  </View>
                
              )
            })}

           
           </DataTable>


        
       </ScrollView> 
       
      </View>
      
    
     </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headers:{
   // flexDirection:'row',
    //flex:1,
    paddingLeft: 50,
    //backgroundColor:'grey',
    justifyContent:'space-around',
  },
  modal:{
    backgroundColor:'rgb(245,255,250) ',
    height:150,
    width:350,
    fontSize:50,
    alignItems:'center',
    textAlign:'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    justifyContent: 'center',
    marginLeft:10,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

  },
  taskModal:{
    backgroundColor:'rgb(245,255,250)',
    borderRadius:20,
  //flexWrap: 'wrap'
  },
  bottom:{
    marginBottom:5,
  },
  delete:{
    flexDirection:'row',
    height:20,
    borderRadius:50
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //paddingBottom:620,
   // backgroundColor:'#000'
    //marginBottom:20,
    
  },
  content:{
    padding:10,
    flex: 1,
    //backgroundColor:'blue',
    //paddingBottom:300,
    //marginBottom:600,
    
    
  },
  
  list:{
    marginTop:20,
    marginLeft:0,
    //justifyContent:'space-around',
    //backgroundColor:'yellow'
  },
  topic:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
    justifyContent:'space-around',
    
    

  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'coral',
    height:2,
    marginTop: 12
  },
  textBtn: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#fff',
  },
  date:{
    //padding:20,
    //backgroundColor:'blue',
   // marginLeft:-18,
  },
});
