import React, { useState }  from "react";
import {
  StatusBar,
  TouchableOpacity,
  View,Text
 
} from 'react-native';
import { StyleSheet } from 'react-native';

const App = function App(){
    const [randomBackground , setrandomBackground] = useState('#ffffff')
    const generateColour = () => {
        const hexRange = "0123456789ABCDEF"
        let colour = "#"
        for (let i = 0; i < 6; i++) {
           colour += hexRange[Math.floor(Math.random() * 16)]
            console.log(colour)
        }
        setrandomBackground(colour) 
    }
  return (
    <>
     <StatusBar backgroundColor={randomBackground}/>
     <View style={[styles.container, {backgroundColor: randomBackground}]}>
        <TouchableOpacity onPress={generateColour}>
            <View style={styles.actionBtn}>
                <Text style={styles.actionBtnTxt}>PRESS ME</Text>
            </View>
        </TouchableOpacity>
     </View>
    </> 
    
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    actionBtn:{
        borderRadius: 12,
        backgroundColor: "#440e3a",
        width: 200,
        height: 50,
        alignItems:'center',
        justifyContent:'center',
        borderColor: '#b0fdfd',
        
    },
    actionBtnTxt:{
        color : '#b0fdfd',
        fontSize: 20,
    }
}
);


export default App;
