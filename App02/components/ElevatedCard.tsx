import React from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'

export default function ElevatedCard() {
 
    return (
      <View>
        <Text  style={styles.headerText}> Elevated Card </Text>
        <ScrollView horizontal={true} style={styles.container} >
            <View style={[styles.card ,styles.elevatedcard]}>
                <Text>Tap</Text>
            </View>
             <View style={[styles.card ,styles.elevatedcard]}>
                <Text>Me</Text>
            </View>
             <View style={[styles.card ,styles.elevatedcard]}>
                <Text>To</Text>
            </View>
             <View style={[styles.card ,styles.elevatedcard]}>
                <Text>Scroll</Text>
            </View>
             <View style={[styles.card ,styles.elevatedcard]}>
                <Text>View</Text>
            </View>
             <View style={[styles.card ,styles.elevatedcard]}>
                <Text>1</Text>
            </View>
             <View style={[styles.card ,styles.elevatedcard]}>
                <Text>2</Text>
            </View>
        </ScrollView>
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
        padding: 8
    },
    card:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width: 100,
        height: 100,
        margin:8,
        borderRadius:8
    },
    elevatedcard:{
        backgroundColor: '#CAD5E2',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor:'blue',
        shadowOpacity : 0.4,
        shadowRadius: 8
    },
})
