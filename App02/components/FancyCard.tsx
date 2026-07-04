import React from 'react'
import { Text, StyleSheet, View , Image} from 'react-native'

export default function  FancyCard  () {
 
    return (
      <View>
        <Text style={styles.headeingText}> Trending place </Text>
        <View style={[styles.card,styles.cardelevated] }>
            <Image 
            source={{
                uri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
            }} style={styles.cardImge}
            />
            <View style={styles.cardBody}>
            <Text style={styles.cardtitle}>Arabian Sea</Text>
            <Text style={styles.cardLable}>Indian Maritime Zone</Text>
            <Text style={styles.cardDesc}>Located on the western coast of India, this body of water connects to the Indian Ocean and serves as a vital shipping route linking India to the Middle East, Africa, and Europe.</Text>
            <Text style={styles.cardFooter}>established in 1963</Text>
        </View>
        </View>
        
      </View>
    )

}

const styles = StyleSheet.create({
    headeingText:{
         margin:10,
        alignSelf:'center',
        fontSize: 24,
        fontWeight:'bold',
        paddingHorizontal: 8
    },
    cardelevated:{
        backgroundColor: '#c4fefa',
        elevation: 3,
        shadowOffset: {
            width: 2,
            height: 2
        }
    },
    card:{
        width: 300,
        height: 390,
        borderRadius: 6,
        marginHorizontal: 16,
        marginVertical: 12
    },
    cardImge:{
        height:200,
        marginBottom: 8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        paddingHorizontal:12
    },
    cardtitle:{
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom:4
    },
    cardLable:{
        color: '#000000',
        fontSize: 19,
         marginBottom:4
       
    },
    cardDesc:{
         color: '#000000',
         fontSize: 14,
          marginBottom:12,
          flexShrink: 1,
          marginTop:2
    },
    cardFooter:{
         color: '#000000'
    },
})
