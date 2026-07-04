import React, { JSX, useState } from 'react';
import {  FlatList, Pressable, StyleSheet, View } from 'react-native';

import { Text } from 'react-native';
import { currencyByRupee } from './constants';
import CurrencyButton from './components/CurrencyButton';
import {Snackbar} from 'react-native-snackbar';
import { StatusBar } from 'react-native';

import { TextInput } from 'react-native';


function App() : JSX.Element {
  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');

  const buttonPressed = (targetValue: Currency)=>{
    if(!inputValue){
      return Snackbar.show({
        text: 'Please enter an amount to convert',
        backgroundColor: '#ff7675',
        textColor: '#000000',
        
      })
    }

    const inputAmount = parseFloat(inputValue)
    if(!isNaN(inputAmount)){
      const convertedValue = inputAmount * targetValue.value;
      const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`
      setResultValue(result)
      setTargetCurrency(targetValue.name)
    } else{
      return Snackbar.show({
        text: 'Not a valid number',
        backgroundColor: '#F4BE2C',
        textColor: '#000000'
      })
    }
  }
    
  
  return (
   <>
    <StatusBar/>
      <View style={styles.container}>
        <View style={styles.headlineContainer}>
           <Text style={styles.headline}>Currency Converter</Text>
        </View>
       
        <View style={styles.topContainer}>
          
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
            maxLength={14}
            value={inputValue}
            clearButtonMode='always'
            onChangeText={setInputValue}
            keyboardType='number-pad'
            placeholder='Enter amount'
            style={styles.inputAmountField}
            />
          </View>
          {resultValue && ( 
            <Text style={styles.resultTxt}>
              {resultValue}
            </Text>
          ) }
        </View>
        <View style={styles.bottomContainer}>
          <FlatList 
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={item => item.name}
            renderItem={({item}) => ( 
              <Pressable
              style={[
                styles.button ,
                targetCurrency === item.name && styles.selected
               ]}
               onPress={() => buttonPressed(item)}
              >
                <CurrencyButton {...item}/>
              </Pressable>
             )}
            />         

        </View>
      </View>
    
   </>
  );
}

const styles = StyleSheet.create({
  headline:{
    fontSize: 30,
    color:'#ff7675',
    fontWeight: '800',
   
  },
headlineContainer:{
flex: 1,
alignItems: 'center', justifyContent: 'center',
},
  container: {
    flex: 1,
    backgroundColor: '#322398',
    
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#ffe2c1',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,
    marginTop: 30,
    fontSize: 25,
    color: '#ffe2c1',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  inputAmountField: {
    marginTop: 30,
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#ffffff',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,

    margin: 12,
    height: 60,

    borderRadius: 12,
    backgroundColor: '#ffffff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: 'rgb(255, 206, 47)',
  },
});

export default App;
