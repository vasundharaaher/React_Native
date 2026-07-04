/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaProvider,
 
} from 'react-native-safe-area-context';
import FlatCards from './components/FlatCards'
import ElevatedCard from './components/ElevatedCard'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import { ScrollView } from 'react-native';
import  ContactList  from './components/ContactList';
import { Text } from 'react-native';

function App() {
 

  return (
    <SafeAreaProvider>
      <ScrollView>
        <Text>APP02</Text>
      
        <FlatCards />

        <ElevatedCard/>

        <FancyCard/>

        <ActionCard/>

        <ContactList/>

      </ScrollView>
    </SafeAreaProvider>
  );
}



export default App;
