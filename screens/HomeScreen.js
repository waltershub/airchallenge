import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import uniqueId from 'lodash.uniqueid';
import { Video } from 'expo';
import VideoThumb from '../components/videoThumb.js';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    //  console.log(this.props.screenProps.videos);
    let videos = this.props.screenProps.videos;
    return (
      <View style={styles.container}>
        <Text style={{ marginTop: 100, fontSize: 50, fontWeight: 'bold', color: 'red' }}>
          Videos
        </Text>
        {videos.length === 0 ? <Text>start making some memories</Text> : null}
        <ScrollView>
          {videos.map(video => (
            <VideoThumb
              key={uniqueId()}
              navigate={this.props.navigation.navigate}
              videoUri={video.video.uri}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

// const VideoThumb = props => (
//   <TouchableOpacity
//     onPress={() => props.navigate('Player', { video: props.videoUri })}
//     style={{ height: 200, width: 200, marginBottom: 20 }}>
//     <Video
//       style={{ height: 200, width: 200 }}
//       source={{ uri: props.videoUri }}
//       usePoster
//       shouldPlay={false}
//     />
//   </TouchableOpacity>
// );
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
