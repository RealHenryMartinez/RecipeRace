import React, {useState, useCallback} from "react";
import { Button, View, Alert } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const VideoCard = ({ route, }) => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  return (
    <>
      {/* Display the name of the ingredients ons the top of the screen */}
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={route.params.data}
        onChangeState={onStateChange}
      />
    </>
  );
};
export default VideoCard;
