import React from 'react'
import { Text, View } from 'react-native'
import VideoCard from '../../Cards/VideoCard'

const VideoScreen = ({route, navigation, embedId}) => {
  console.log(route.params)
  return (
    
    <View>
      
      <VideoCard style={{marginTop: 100}} />
    </View>

  )
}

export default VideoScreen