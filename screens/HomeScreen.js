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
    return (
      <View style={styles.container}>
        <Text style={{ marginTop: 100, fontSize: 50, fontWeight: 'bold', color: 'red' }}>
          Videos
        </Text>
        {videos.length === 0 ? <Text>start making some memories</Text> : null}
        <ScrollView>
          {videos.map(video => (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Player', { video: video.video.uri })}
              style={{ height: 200, width: 200, marginBottom: 20 }}
              key={uniqueId()}>
              <Image style={{ height: 200, width: 200 }} source={{ uri: video.thumbnail.uri }} />
            </TouchableOpacity>
          ))}
        </ScrollView>
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
