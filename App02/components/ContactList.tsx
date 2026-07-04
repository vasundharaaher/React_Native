import React from 'react'
import { Text, View , StyleSheet} from 'react-native'
import { Image } from 'react-native';
import { ScrollView } from 'react-native';

export default function ContactList () {
  const contacts =   [
              {
                uid: 1,
                name: "Ava Johnson",
                status: "Available",
                imageurl: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
              },
              {
                uid: 2,
                name: "Noah Williams",
                status: "Busy",
                imageurl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
              },
              {
                uid: 3,
                name: "Olivia Brown",
                status: "Offline",
                imageurl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
              },
              {
                uid: 4,
                name: "Liam Miller",
                status: "In a meeting",
                imageurl: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
              },
              {
                uid: 5,
                name: "Sophia Davis",
                status: "At work",
                imageurl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
              },
              {
                uid: 6,
                name: "Mason Martinez",
                status: "On vacation",
                imageurl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
              },
              {
                uid: 7,
                name: "Isabella Garcia",
                status: "Available",
                imageurl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
              },
              {
                uid: 8,
                name: "Ethan Rodriguez",
                status: "Do not disturb",
                imageurl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
              }
      ];

    return (
      <View>
        <Text style={styles.headerText}> Contact List </Text>
        <ScrollView 
        style={styles.container}
        scrollEnabled={false}
        >
          {contacts.map(({uid, name, status, imageurl}) => (
            <View key={uid} style={styles.card}>
              <Image 
              source={
                {uri: imageurl} 
              }
              style={styles.imagescard}
              />
              <View>
                <Text style={styles.username}>{name}</Text>
                <Text style={styles.userstatus}>{status}</Text>
              </View>
              
            </View>
          ))}
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
      
      paddingHorizontal:10,
      paddingVertical:10,
      marginBottom:5
    },
    card:{
      flex:1,
      flexDirection:'row',
      alignItems:'center',
      padding:10,
      backgroundColor: '#CAD5E2',
      borderRadius:8,
      marginBottom:10,
      elevation: 4,
      shadowOffset: {
          width: 1,
          height: 2
      }
    },
    imagescard:{
      height:60,
      width:60,
      borderRadius:30,
      marginRight:10
    },
    username:{
      color: 'black',
      fontSize: 13,
      fontWeight: 'bold' 
    },
    userstatus:{
      color: 'gray',
      fontSize: 13,
      fontWeight: 'normal'

    }
  })

