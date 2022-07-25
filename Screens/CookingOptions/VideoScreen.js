import React from 'react'
import { Text } from 'react-native'
import VideoCard from '../../Cards/VideoCard'

const VideoScreen = () => {
  return (
 
      <div>
        <iframe
                        // data = {route.params.recepies}
                        src="https://www.youtube.com/embed/T59N3DPrvac"
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                        title="video"
                    />{" "}
      </div>

  )
}

export default VideoScreen