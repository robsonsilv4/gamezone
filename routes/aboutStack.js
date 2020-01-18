import About from '../screens/about';
import { Header } from 'react-native/Libraries/NewAppScreen';
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

const screens = {
  Home: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="Sobre o GameZone" />
        ),
      };
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {
      backgroundColor: '#eee',
      height: 80,
    },
  },
});

export default AboutStack;
