


import React , {JSX} from 'react'
import {  StyleSheet,  View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button } from 'react-native';

type DetailProps = NativeStackScreenProps<RootStackParamList, 'Details'>


function Details({route}: DetailProps): JSX.Element {
 
  const { productId } = route.params
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Details: {productId}</Text>
      <Button
      title="Go to Home"
      // onPress={() => navigation.goBack()}
       onPress={() => navigation.navigate("Home")}
      // onPress={() => navigation.popToTop()}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  smallText:{
    color: "#000000"
  }
});

export default Details;