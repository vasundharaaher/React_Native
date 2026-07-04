/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React, {JSX} from 'react';

// Navigation 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Default from './screens/Details';


export type RootStackParamList = {
  Home : undefined,
  Details: {productId: string}
};
const Stack = createNativeStackNavigator<RootStackParamList>()

function App(): JSX.Element {
 

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
      name="Home"
      component={Home}
      options={{
        title: "Trending Product"
      }}
      />

      <Stack.Screen
      name="Details"
      component={Default}
      options={{
        title: "Trending Product"
      }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
