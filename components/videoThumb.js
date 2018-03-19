import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Video } from 'expo';

const VideoThumb = props => (
  <TouchableOpacity
    onPress={() => props.navigate('Player', { video: props.videoUri })}
    style={{ height: 200, width: 200, marginBottom: 20 }}>
    <Video
      style={{ height: 200, width: 200 }}
      source={{ uri: props.videoUri }}
      usePoster
      shouldPlay={false}
    />
  </TouchableOpacity>
);

export default VideoThumb;
