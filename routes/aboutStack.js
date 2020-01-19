import About from '../screens/about';
import Header from '../shared/header';
import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header title="Sobre o GameZone" navigation={navigation} />
        ),
      };
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 80 },
    headerTitleAlign: 'center',
  },
});

export default AboutStack;
