import React from 'react'
import { Text, View } from 'react-native'
import VideoCard from '../../Cards/VideoCard'

const VideoScreen = ({route, navigation}) => {
  return (
    <View>
      <VideoCard embedId={route.params.video} />
    </View>

  )
}

export default VideoScreen