/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React  from "react";
import {
  SafeAreaProvider,
 
} from 'react-native-safe-area-context';
import {Text, View,StyleSheet} from 'react-native';

const App = function App(){
  return (
     <SafeAreaProvider>
      <View style={styles.container}>
        <Text style={styles.text}>Hello</Text>   
      </View>
         
     </SafeAreaProvider>
  )
}
const styles = StyleSheet.create(
  {container: 
    {
      flex:1,
      alignItems:'center' ,
      justifyContent:'center'
    },
    text:{
      color: 'green',
      fontSize:20,
      fontWeight: 'bold',
    }
  }
);
// import { NewAppScreen } from '@react-native/new-app-screen';
// import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
// import {
//   SafeAreaProvider,
//   useSafeAreaInsets,
// } from 'react-native-safe-area-context';

// function App() {
//   const isDarkMode = useColorScheme() === 'dark';

//   return (
//     <SafeAreaProvider>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <AppContent />
//     </SafeAreaProvider>
//   );
// }

// function AppContent() {
//   const safeAreaInsets = useSafeAreaInsets();

//   return (
//     <View style={styles.container}>
//       <NewAppScreen
//         templateFileName="App.tsx"
//         safeAreaInsets={safeAreaInsets}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

export default App;
