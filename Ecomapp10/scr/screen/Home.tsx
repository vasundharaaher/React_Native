/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, View, Pressable, FlatList } from 'react-native';
// Navigation 
import { NativeStackScreenProps } from "@react-navigation/native-stack"

import { RootStackPramList } from '../App';

import ProduceItem from '../components/ProduceItem';
import Seprator  from '../components/Seprator';
// Data
import { PRODUCTS_LIST } from '../data/constants';


type HomeProps = NativeStackScreenProps<RootStackPramList , "Home">

const Home = ({navigation}: HomeProps) => {

  return (
    <View style={styles.container}>
      <FlatList
      data={PRODUCTS_LIST}
      keyExtractor={item => item.id}
      ItemSepratorComponent={Seprator}
      renderItem={
        ({item}) => {
          <Pressable
          onPress={() => {
            navigation.navigate('Details', {
              product: item
            })
          }}>
            <ProduceItem product={item}/>           
          </Pressable>
        }
      }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',

    padding: 12,
    backgroundColor: '#FFFFFF',
  },
});


export default Home;
