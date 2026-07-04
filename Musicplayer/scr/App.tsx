
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'; 
import {
  StatusBar,
 
  StyleSheet,
 
  View,
  ActivityIndicator
} from 'react-native';
import { setupPlayer , addTrack } from '../musicPlayerServices'
import MusicPlayer from './screen/MusicPlayer';

function App() {
  const [isPlayerReady , setIsPlaylerReady] = useState(false)

async function setup(){
  let isSetup = await setupPlayer()

  if (isSetup){
    await addTrack()
  }
  setIsPlaylerReady(isSetup)
}
useEffect(() => {
  setup()
} , [])

  if(!isPlayerReady){
    return (
      <SafeAreaView>
        <ActivityIndicator/>
      </SafeAreaView>
    )
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <MusicPlayer/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
