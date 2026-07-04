import React, {JSX} from "react";
import { View, Text , StyleSheet,useColorScheme } from "react-native";

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'dark'
    return(
        <View style={style.container}>
            <Text style={isDarkMode ? style.whitetext : style.blacktext}>Hello from Apppro </Text>
        </View>
    )
}
const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'light blue'
    },
    whitetext:{
        color: 'white'
    },
    blacktext:{
        color: 'black'
    }

})
export default AppPro