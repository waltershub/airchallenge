import React from 'react';
import { View, Text, TouchableOpacity, Share } from 'react-native';
import { Video } from 'expo';
import { FontAwesome } from '@expo/vector-icons';

const VideoThumb = props => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
    <TouchableOpacity
      onPress={() => props.navigate('Player', { video: props.videoUri })}
      style={{ height: 200, width: 200 }}>
      <Video
        style={{ height: 200, width: 200 }}
        source={{ uri: props.videoUri }}
        usePoster
        shouldPlay={false}
      />
    </TouchableOpacity>
    <FontAwesome
      name="share"
      color="blue"
      size={30}
      onPress={() => Share.share({ message: 'video', title: 'video', url: props.videoUri })}
    />
  </View>
);

export default VideoThumb;
