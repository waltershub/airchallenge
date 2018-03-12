import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions } from 'expo';
import { EvilIcons, Foundation } from '@expo/vector-icons';

export default class CameraScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    recording: false,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    Permissions.askAsync(Permissions.AUDIO_RECORDING);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  record = async () => {
    this.setState({ recording: true });
    let video = await this.camera.recordAsync();
    console.log(video);
  };

  stopRecording = () => {
    this.camera.stopRecording();
  };

  render() {
    console.log(this.Camera);
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Text>Recording</Text>
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
          </Camera>
        </View>
      );
    }
  }
}
