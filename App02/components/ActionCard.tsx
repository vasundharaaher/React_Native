import React from 'react'
import { Text, View , StyleSheet, Linking, TouchableOpacity} from 'react-native'
import { Image } from 'react-native'

export default function ActionCard (){
    function opeWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
    return (
      <View>
        <Text style={styles.headeingText}> Action Card </Text>
        <View style={[styles.card , styles.elevatedcard] }>
            <View style={[styles.headlineContainer]}>
                <Text style={[styles.headerText]}>What's new in js</Text>
            </View>
            <Image source={
               { 
                uri:'https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }
            } style={styles.imagecard} />
            <View style={styles.container}>
                <Text numberOfLines={3}>
                    A meeting is a planned or spontaneous gathering of two or more people, 
                    held in person or online, with a defined goal. It functions as a platform for 
                    discussion, problem-solving, decision-making, and collaboration.
                    Status Updates: Informing team members about project progress and sharing general information.
                    Decision-Making: Gathering stakeholders to deliberate and arrive at a specific choice or consensus.
                    Innovation & Problem-Solving: Brainstorming ideas or working through complex challenges.
                </Text>
            </View>
             <View style={styles.footercontainer}>
                <TouchableOpacity 
                onPress={() => opeWebsite('https://teams.live.com/free')}
                style={styles.socialLink}
                >
                    <Text>Read more 1</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => opeWebsite('https://meet.google.com/landing')}
                style={styles.socialLink}
                >
                    <Text>Read more 2</Text>
                </TouchableOpacity>
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
    card:{
        width: 330,
        height: 450,
        margin: 13,
        borderRadius: 8,
        
    },
    elevatedcard:{
        backgroundColor: '#dded',
        elevation:1,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowOpacity: 0.3
    },
    headlineContainer:{
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center'
    },

    headerText:{
        color: '#000',
        fontSize :16,
        fontWeight:'bold'
    },
    imagecard:{
        height:200
    },
    container:{
        padding:10
    },
    footercontainer:{
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-evenly'
    },
    socialLink:{
        fontSize:16,
        color: '#0d3d85',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical:6,
        borderRadius:6
    }

})

