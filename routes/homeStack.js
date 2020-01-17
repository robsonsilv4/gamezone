import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import { createStackNavigator } from 'react-navigation-stack';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'GameZone',
      // headerStyle: {
      //   backgroundColor: '#eee',
      // },
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'Detalhes da avaliação',
      // headerStyle: {
      //   backgroundColor: '#eee',
      // },
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {
      backgroundColor: '#eee',
      height: 80,
    },
  },
});

export default HomeStack;
