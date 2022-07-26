import React from 'react'
import { Text, View } from 'react-native'
import VideoCard from '../../Cards/VideoCard'

const VideoScreen = ({route, navigation, embedId}) => {
  console.log(route.params)
  return (
    <View>
      <VideoCard />
    </View>

  )
}

export default VideoScreen