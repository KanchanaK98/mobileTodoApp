import React from 'react'
import { View, StyleSheet,Text } from 'react-native'
import { Foundation } from '@expo/vector-icons';

export default function Header() {
    return (
        <View >
        <View style={styles.header}>
        <Foundation name="clipboard-notes" size={34} color="black" />
        <Text style={styles.title}>My Todos</Text>
        </View>
        </View>
    )
}
const styles=StyleSheet.create({
    header:{
        height:70,
        paddingTop:30,
        backgroundColor:'coral',
        flexDirection:'row',
        alignItems:'center',
        textAlign:'center',
        justifyContent:'center',
    },
    title:{
        textAlign:'center',
        color:'#fff',
        fontSize:20,
        fontWeight:'bold',
        marginLeft:4
    }
});
