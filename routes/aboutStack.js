import About from '../screens/about';
import { createStackNavigator } from 'react-navigation-stack';

const screens = {
  Home: {
    screen: About,
    navigationOptions: {
      title: 'Sobre o GameZone',
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
