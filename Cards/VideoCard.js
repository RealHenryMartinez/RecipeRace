import React from 'react'
import { Text, FlatList, View} from 'react-native'
import { WebView } from 'react-native-webview';


const VideoCard = ({route, navigation}) => {
    const {video} = route.params

  return (
    <>
            
            {/* Display the name of the ingredients ons the top of the screen */}
            <WebView
        
            source={{uri: `https://www.youtube.com/embed/${video}`}} />
    </>
        )
}
export default VideoCard
