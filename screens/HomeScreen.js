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

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    //  console.log(this.props.screenProps.videos);
    let videos = this.props.screenProps.videos;
    console.log(videos);
    return (
      <View style={styles.container}>
        <Text>Videos</Text>
        {videos.map(video => (
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Player', { video: video.video.uri })}
            style={{ height: 200, width: 200, marginBottom: 20 }}
            key={uniqueId()}>
            <Image style={{ height: 200, width: 200 }} source={{ uri: video.thumbnail.uri }} />
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
