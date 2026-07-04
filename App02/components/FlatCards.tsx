import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default function FlatCards(){
 
    return (
      <View >
        <Text style={styles.headerText}> FlatCards </Text>
        <View style={styles.container}>
            <View style={[styles.card , styles.cardOne]}>
                <Text>Red</Text>
            </View>
            <View style={[styles.card , styles.cardTwo]}>
                <Text>Blue</Text>
            </View>
            <View  style={[styles.card , styles.cardThree]}>
                <Text>Purple</Text>
            </View>
        </View>
      </View>
    )
  
}

const styles = StyleSheet.create({
   
    headerText:{
        margin:20,
        alignSelf:'center',
        fontSize: 24,
        fontWeight:'bold',
        paddingHorizontal: 8
    },
    container:{
        flex:1,
        flexDirection: 'row',
        padding:8
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        borderRadius:8,
        margin:8
    },
    cardOne:{
        backgroundColor:'red',
        
    },
    cardTwo:{
        backgroundColor:'lightblue',
        
    },
     cardThree:{
        backgroundColor:'purple',
        
    }
})
