import TrackPlayer, {
  State,
  PlaybackState,
  usePlaybackState,
} from 'react-native-track-player';

// import playbackService from '../../musicPlayerServices'
import Icons from 'react-native-vector-icons/MaterialIcons'
import { View, StyleSheet, Pressable } from 'react-native'

const ControlCenter = () => {
    const playBackState = usePlaybackState()
    // next button
    const skipToNext = async () => {
        await TrackPlayer.skipToNext()
    }
    // previous button
    const skipToPrevious = async () => {
        await TrackPlayer.skipToPrevious()
    }

    const togglePlayback = async (playback: PlaybackState['state']) => {
        const currentTrack = await TrackPlayer.getCurrentTrack()

        if (currentTrack !== null){
            if (playback === State.Paused || playback === State.Ready){
                await TrackPlayer.play()
            } else {
                await TrackPlayer.pause()
            }
        }
    }
    return (
        <View style={styles.container} >
            <Pressable onPress={skipToPrevious}>
                <Icons style={styles.icon} name="skip-previous" size={40}/>
            </Pressable>
            <Pressable onPress={() => togglePlayback(playBackState.state)}>
                <Icons 
                    style={styles.icon} 
                    name={playBackState.state === State.Playing ? "pause" : "play-arrow"}
                    size={75}
                    />
            </Pressable>
            <Pressable onPress={skipToNext}>
                <Icons style={styles.icon} name="skip-next" size={40}/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      marginBottom: 56,
  
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      color: '#FFFFFF',
    },
    playButton: {
      marginHorizontal: 24,
    },
  });

export default ControlCenter;