import React, { useEffect } from "react";
import { View, StyleSheet, Button } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default function VideoLogo() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      video.current.playAsync();
      video.current.setIsLoopingAsync(1);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={require("../Video/video.mp4")}
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#137383",
  
  },
  video: {
    alignSelf: "center",
    width: wp("100%"),
    height: hp("50%"),

  },
 
});
