import React,{useState} from 'react';
import {StyleSheet,Text, View,TouchableHighlight,TextInput,Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import DatePicker from 'react-native-datepicker'

export default function AddTodos({submitHandler}) {
    const [Todos, setTodos] = useState('');
    const [Dates, setDates] = useState("2016-05-15");
    const [placeholders, setplaceholders] = useState("Add Todos...");
    
    changeTodo=(val)=>
    {
        setTodos(val);
    }
    changeDate=(val)=>
    {
        setDates(val);
    }
   
    
    return (
        <View>
            <View style={styles.input}>
            
                <TextInput
                style={styles.x}
                maxLength={500}
                placeholder={placeholders}
                onChangeText={changeTodo}
                />
                {/*<TextInput
                style={styles.y}
                placeholder="Add Date..."
                onChangeText={changeDate}
                />*/}
               <DatePicker
                    style={{width: 180}}
                    date={Dates}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="2020-05-01"
                    //maxDate="2016-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                    // ... You can check the source to find the other keys.
                    }}
                    onDateChange={changeDate}
                />
                
                
            </View>
            

            <TouchableHighlight onPress={()=>submitHandler(Todos,Dates)}>
                <View style={styles.add}>
                <View style={styles.addtodo}>
                   <AntDesign name="plus" size={20} color="black" />
                    <Text style={styles.text}>Todo</Text>
                </View>
                </View>
            </TouchableHighlight>
            
            
        </View>
    )
}
const styles=StyleSheet.create({
    addtodo:{
        //marginLeft:20,
        alignItems:'center',
        //marginLeft:3,
        flexDirection:'row',
        justifyContent:'center',
        
    },
    input:{
        
        flexDirection:'row',
        justifyContent:'center',
        //width:300,
        //backgroundColor:'grey',
        marginBottom:5,
    },
    text:{
        textAlign:'center',
        //margin:5,
    },
    add:{
       
        textAlign:'center',
        alignItems:'center',
        backgroundColor:'coral',
        flexDirection:'row',
        justifyContent:'center',
        borderWidth:0.5,
        borderRadius:15,
        marginLeft:145,
        width:80,
        marginTop:5
    },
    x:{
        marginBottom:5,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#000',
        width:150
    },
    y:{
        marginBottom:5,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#000',
        marginLeft:50,
    },
})
