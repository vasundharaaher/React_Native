/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {JSX, useState} from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { PropsWithChildren } from 'react';
import { Text,ImageSourcePropType } from 'react-native';
import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';


type DiceProps = PropsWithChildren<{
  imageUrl : ImageSourcePropType
}>

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({imageUrl}: DiceProps): JSX.Element =>{
  return(
    <View style={styles.diceContainer}>
      <Image style={styles.diceImage} source={imageUrl}/>
    </View>
  )
}

function App(): JSX.Element {
 
  const [diceImage , setdiceImage] = useState<ImageSourcePropType>(DiceOne)

  const rollingDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1
    switch (randomNumber) {
      case 1:
        setdiceImage(DiceOne)
        break;
      case 2:
        setdiceImage(DiceTwo)
        break;
      case 3:
        setdiceImage(DiceThree)
        break;
      case 4:
        setdiceImage(DiceFour)
        break;
      case 5:
        setdiceImage(DiceFive)
        break;
      case 6:
        setdiceImage(DiceSix)
        break;
      default:
        setdiceImage(DiceOne)
        break;
    }
    ReactNativeHapticFeedback.trigger('impactLight', options);
  }
  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable 
      onPress={rollingDiceOnTap}>
        <Text
        style={styles.rollDiceBtnText}
        > Roll the Dice</Text>
       
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
export default App;
