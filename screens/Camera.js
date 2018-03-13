import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Camera, Permissions } from 'expo';
import { EvilIcons, Foundation } from '@expo/vector-icons';

export default class CameraScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    recording: false,
    time: 0,
    recordingText: '',
    video: null,
    thumbnail: null,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    Permissions.askAsync(Permissions.AUDIO_RECORDING);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  record = async () => {
    this.setState({ recording: true, recordingText: 'recording' });
    let thumbnail = await this.camera.takePictureAsync();
    let video = await this.camera.recordAsync();
    this.setState({ video, thumbnail });
    this.props.screenProps.saveVideo({ video, thumbnail });
  };

  stopRecording = () => {
    this.setState({ recording: false, recordingText: '' });
    this.camera.stopRecording();
  };

  goToVideo = () => {
    this.props.navigation.navigate('Player', { video: this.state.video.uri });
  };
  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Text>{this.state.recordingText}</Text>
          <Camera
            style={{ flex: 1 }}
            type={this.state.type}
            ref={ref => {
              this.camera = ref;
            }}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
                alignSelf: 'flex-end',
              }}>
              <EvilIcons
                style={{
                  flex: 1,
                  alignSelf: 'flex-end',
                }}
                name="refresh"
                size={60}
                color="#fff"
                onPress={() => {
                  this.setState({
                    type:
                      this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                  });
                }}
              />
              <Foundation
                style={{
                  flex: 1,
                  alignSelf: 'flex-end',
                }}
                name="record"
                color="red"
                size={60}
                onPress={() => {
                  !this.state.recording ? this.record() : this.stopRecording();
                }}
              />
            </View>
            {this.state.video ? (
              <TouchableOpacity style={{ height: 50, width: 50 }} onPress={this.goToVideo}>
                <Image
                  style={{ height: 50, width: 50 }}
                  source={{ uri: this.state.thumbnail.uri }}
                />
              </TouchableOpacity>
            ) : (
              <View />
            )}
          </Camera>
        </View>
      );
    }
  }
}
