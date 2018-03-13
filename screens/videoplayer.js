import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Video } from 'expo';
export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Player',
  };

  render() {
    console.log(this.props.navigation.state.params.video);
    let video =
      this.props.navigation.state.params.video ||
      'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4';
    return (
      <Video
        source={{ uri: video }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={{ width: '100%', height: '100%' }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
