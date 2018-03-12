import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import Videos from '../screens/HomeScreen';
import Camera from '../screens/Camera';

export default TabNavigator(
  {
    Videos: {
      screen: Videos,
    },
    Camera: {
      screen: Camera,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Videos':
            iconName =
              Platform.OS === 'ios'
                ? `ios-folder-open${focused ? '' : '-outline'}`
                : 'md-information-circle';
            break;
          case 'Camera':
            iconName =
              Platform.OS === 'ios' ? `ios-videocam${focused ? '' : '-outline'}` : 'md-videocam';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
