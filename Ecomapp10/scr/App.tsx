/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

// Navigation 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
// Screen
import Home from './screen/Home'
import Details from './screen/Details';

export type RootStackPramList = {
  Home: undefined,
  Details: {product : Product}
}

const Stack = createNativeStackNavigator<RootStackPramList>()

const App = () => {
 

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
        name="Home"
        component={Home}
        options={{ 
          title: "Trending Products"
        }}
        />

        <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title:"Details of product"
        }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
